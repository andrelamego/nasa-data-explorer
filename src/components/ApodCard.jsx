import { ExternalLink, Image as ImageIcon, Video } from "lucide-react";
import { useState } from "react";

const ApodCard = ({ data }) => {
    const [fit, setFit] = useState("contain"); // cover | contain

    if (!data) return null;

    const isVideo = data.media_type === "video";
    const preview = data.thumbnail_url || data.hdurl || (!isVideo ? data.url : null);

    const decideObjectFit = (img) => {
        const imgRatio = img.naturalWidth / img.naturalHeight;
        const targetRatio = 16 / 9;

        const diff = Math.abs(imgRatio - targetRatio) / targetRatio;

        setFit(diff > 0.3 ? "contain" : "cover");
    };


    return (
        <article className="rounded-2xl border border-white/10 bg-space-800/60 backdrop-blur shadow-[0_18px_70px_rgba(0,0,0,0.45)] overflow-hidden">
            {/* header */}
            <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="font-mono text-xs tracking-widest text-stellar-400">
                            {data.date}
                        </p>
                        <h1 className="mt-2 font-display text-2xl sm:text-3xl text-stellar-100">
                            {data.title}
                        </h1>
                    </div>

                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-stellar-300">
            {isVideo ? <Video size={14} /> : <ImageIcon size={14} />}
                        {isVideo ? "video" : "image"}
          </span>
                </div>
            </div>

            {/* media */}
            <div className="relative">
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {isVideo ? (
                    <div className="aspect-video w-full bg-black">
                        <iframe
                            className="h-full w-full"
                            src={data.url}
                            title={data.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                ) : (
                    <div className="w-full bg-[#05060a] flex items-center justify-center">
                        <img
                            src={data.hdurl || data.url}
                            alt={data.title}
                            loading="lazy"
                            onLoad={(e) => decideObjectFit(e.currentTarget)}
                            className={[
                                "w-full max-h-[75vh] transition-[object-fit] duration-300",
                                fit === "cover" ? "object-cover" : "object-contain",
                            ].join(" ")}
                        />
                    </div>
                )}

                {preview && (
                    <div className="absolute bottom-4 right-4">
                        <a
                            href={preview}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-space-900/70 border border-white/10 px-3 py-2 text-xs text-stellar-100 backdrop-blur hover:bg-space-900/85 transition"
                        >
                            <ExternalLink size={14} />
                            Open
                        </a>
                    </div>
                )}
            </div>


            {/* body */}
            <div className="p-6 sm:p-8">
                <p className="text-stellar-300/90 leading-relaxed">
                    {data.explanation}
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                    {data.copyright ? (
                        <p className="text-xs text-stellar-400 italic">© {data.copyright}</p>
                    ) : (
                        <span />
                    )}

                    {data.hdurl && !isVideo && (
                        <a
                            href={data.hdurl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs font-mono text-stellar-300 hover:text-stellar-100 transition"
                        >
                            View HD
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
};

export default ApodCard;
