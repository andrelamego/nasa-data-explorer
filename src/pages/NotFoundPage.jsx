import { Link } from "react-router-dom";
import { ArrowLeft, Home, Telescope } from "lucide-react";

export default function NotFoundPage() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-space-900">
            <div
                className="pointer-events-none absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(/images/space-bg.jpg)" }}
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-space-900/90 via-space-900/60 to-space-900/30" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-space-900/80 via-transparent to-transparent" />

            <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24 pb-12">
                <div className="w-full">
                    <div
                        className="
                          mx-auto max-w-2xl rounded-2xl border border-white/10 bg-space-800/60
                          backdrop-blur shadow-[0_18px_70px_rgba(0,0,0,0.45)]
                          p-6 sm:p-10
                          opacity-0 animate-[fadeUp_.7s_ease-out_both]
                          motion-reduce:animate-none
                        "
                    >
                        <div className="flex items-center gap-3 text-stellar-200">
                            <Telescope className="text-orbit-400" size={18} />
                            <p className="font-mono text-xs tracking-widest text-stellar-400">
                                ERROR 404
                            </p>
                        </div>

                        <h1 className="mt-4 font-display text-3xl sm:text-4xl text-stellar-100">
                            Page not found
                        </h1>

                        <p className="mt-3 text-stellar-300/90 leading-relaxed">
                            Looks like this route drifted into deep space. Try going back or return
                            to the homepage.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 rounded-xl bg-orbit-500 px-5 py-3 text-sm font-medium text-white hover:bg-orbit-400 transition"
                            >
                                <Home size={16} />
                                Go Home
                            </Link>

                            <button
                                onClick={() => window.history.back()}
                                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-stellar-200 hover:bg-white/10 transition"
                            >
                                <ArrowLeft size={16} />
                                Go Back
                            </button>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-2">
                            {["/apod", "/mars", "/neo", "/earth"].map((p) => (
                                <Link
                                    key={p}
                                    to={p}
                                    className="inline-flex items-center rounded-full px-3 py-1.5 text-xs bg-white/5 border border-white/10 text-stellar-300 font-mono hover:text-stellar-100 hover:bg-white/10 transition"
                                >
                                    {p}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
