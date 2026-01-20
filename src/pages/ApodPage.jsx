import { useMemo, useState } from "react";
import { useApod } from "../hooks/useApod";
import DatePicker from "../components/DatePicker";
import ErrorMessage from "../components/ErrorMessage";
import ApodCard from "../components/ApodCard";
import ApodSkeleton from "../components/ApodSkeleton";
import { getTodayDate } from "../utils/dataUtils";
import { publicUrl } from "../utils/asset.js";

export default function ApodPage() {
    const today = useMemo(() => getTodayDate(), []);
    const minDate = "1995-06-16";

    const [selectedDate, setSelectedDate] = useState(today);
    const { data, loading, error, refetch } = useApod(selectedDate);

    const onDateChange = (newDate) => {
        if (!newDate) return;
        if (newDate > today) return;
        if (newDate < minDate) return;
        setSelectedDate(newDate);
    };

    return (
        <section className="relative min-h-screen overflow-hidden bg-space-900">
            <div
                className="pointer-events-none absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${publicUrl("images/space-bg.jpg")})` }}
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-space-900/85 via-space-900/60 to-space-900/30" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-space-900/80 via-transparent to-transparent" />

            <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-16">
                <div className="mb-8">
                    <p
                        className="
                          font-mono text-xs tracking-widest text-stellar-400
                          opacity-0 animate-[fadeUp_.6s_ease-out_both]
                          motion-reduce:animate-none
                        "
                    >
                        /planetary/apod
                    </p>

                    <h2
                        className="
                          mt-2 font-display text-3xl sm:text-4xl text-stellar-100
                          opacity-0 animate-[fadeUp_.75s_ease-out_both]
                          [animation-delay:80ms]
                          motion-reduce:animate-none
                        "
                    >
                        Astronomy Picture of the Day
                    </h2>

                    <p
                        className="
                          mt-3 max-w-2xl text-stellar-300/90
                          opacity-0 animate-[fadeUp_.75s_ease-out_both]
                          [animation-delay:160ms]
                          motion-reduce:animate-none
                        "
                    >
                        Pick a date and explore NASA’s daily featured image — sometimes a video,
                        always a story.
                    </p>
                </div>

                <div
                    className="
                        opacity-0 animate-[fadeUp_.75s_ease-out_both]
                        [animation-delay:240ms]
                        motion-reduce:animate-none
                      "
                >
                    <DatePicker
                        selectedDate={selectedDate}
                        onDateChange={onDateChange}
                    />
                </div>

                <div className="mt-8">
                    {loading && <ApodSkeleton />}

                    {!loading && error && (
                        <ErrorMessage
                            message={error}
                            onRetry={() => refetch(selectedDate)}
                        />
                    )}

                    {!loading && !error && data && (
                        <div key={data.date}>
                            <ApodCard data={data} />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
