import {useEffect, useMemo, useRef, useState} from "react";

export default function Hero() {
    const heroRef = useRef(null);
    const bgRef = useRef(null);
    const moonWrapRef = useRef(null);
    const rafRef = useRef(0);

    const BODIES = useMemo(
        () => [
            {id: "earth", label: "Earth", mediaType: "video", src: "/videos/spinning-earth.mp4"},
            {id: "mars", label: "Mars", mediaType: "video", src: "/videos/spinning-mars.mp4"},
            {id: "moon", label: "Moon", mediaType: "video", src: "/videos/spinning-moon.mp4"},
        ],
        []
    );

    const [activeBody, setActiveBody] = useState(() => {
        try {
            return localStorage.getItem("activeBody") || "earth";
        } catch {
            return "moon";
        }
    });

    const body = BODIES.find((b) => b.id === activeBody) ?? BODIES[0];

    useEffect(() => {
        try {
            localStorage.setItem("activeBody", activeBody);
        } catch { /* empty */ }
    }, [activeBody]);

    useEffect(() => {
        const hero = heroRef.current;
        const bg = bgRef.current;
        const moonWrap = moonWrapRef.current;
        if (!hero || !bg || !moonWrap) return;

        const reduceMotion =
            window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
        if (reduceMotion) return;

        const state = {tx: 0, ty: 0, cx: 0, cy: 0};

        const loop = () => {
            state.cx += (state.tx - state.cx) * 0.10;
            state.cy += (state.ty - state.cy) * 0.10;

            const bgX = (state.cx * 6).toFixed(2);
            const bgY = (state.cy * 6).toFixed(2);
            bg.style.transform = `translate3d(${bgX}px, ${bgY}px, 0) scale(1.03)`;

            const moonX = (state.cx * 12).toFixed(2);
            const moonY = (state.cy * 12).toFixed(2);
            moonWrap.style.transform = `translate3d(${moonX}px, ${moonY}px, 0)`;

            rafRef.current = requestAnimationFrame(loop);
        };

        const onMove = (e) => {
            const r = hero.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width;
            const y = (e.clientY - r.top) / r.height;
            state.tx = (x - 0.5) * 2;
            state.ty = (y - 0.5) * 2;
        };

        const onLeave = () => {
            state.tx = 0;
            state.ty = 0;
        };

        rafRef.current = requestAnimationFrame(loop);
        hero.addEventListener("mousemove", onMove, {passive: true});
        hero.addEventListener("mouseleave", onLeave, {passive: true});

        return () => {
            cancelAnimationFrame(rafRef.current);
            hero.removeEventListener("mousemove", onMove);
            hero.removeEventListener("mouseleave", onLeave);
        };
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen overflow-hidden bg-space-800 flex items-center"
        >
            <div
                ref={bgRef}
                className="absolute inset-0 bg-cover bg-center will-change-transform"
                style={{backgroundImage: "url(/images/space-bg.jpg)"}}
            />

            <div className="pointer-events-none absolute inset-0 opacity-[0.10] motion-reduce:hidden">
                <div className="absolute -inset-20 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,.6)_0,rgba(255,255,255,0)_45%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,.5)_0,rgba(255,255,255,0)_40%),radial-gradient(circle_at_40%_80%,rgba(255,255,255,.35)_0,rgba(255,255,255,0)_35%)] animate-[drift_26s_linear_infinite]" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-space-900/90 via-space-900/55 to-space-900/20"/>
            <div className="absolute inset-0 bg-gradient-to-t from-space-900/70 via-transparent to-transparent"/>

            <div className="relative mx-auto max-w-7xl px-6 w-full pt-24">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* ================= LEFT TEXT ================= */}
                    <div>
                        <p className="font-mono text-sm text-stellar-300/90 opacity-0 animate-[fadeUp_.7s_ease-out_both] motion-reduce:animate-none">
                            NASA Data Explorer
                        </p>

                        <h1 className="mt-4 font-display text-5xl sm:text-6xl xl:text-7xl tracking-tight text-stellar-100 opacity-0 animate-[fadeUp_.85s_ease-out_both] [animation-delay:120ms] motion-reduce:animate-none">
                            Explore the universe <br className="hidden sm:block"/>
                            through real data
                        </h1>

                        <p className="mt-6 max-w-lg text-lg text-stellar-300/90 leading-relaxed opacity-0 animate-[fadeUp_.85s_ease-out_both] [animation-delay:220ms] motion-reduce:animate-none">
                            A curated, interactive view of NASA imagery, missions, and cosmic events.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4 opacity-0 animate-[fadeUp_.85s_ease-out_both] [animation-delay:320ms] motion-reduce:animate-none">
                            <a
                                href="#astronomy"
                                className="rounded-xl bg-orbit-500 px-6 py-3 text-base font-medium text-white hover:bg-orbit-400 transition"
                            >
                                Start exploring
                            </a>
                            <a
                                href="#apod"
                                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-base text-stellar-200 hover:bg-white/10 transition"
                            >
                                View APOD
                            </a>
                        </div>

                        <div className="mt-6 opacity-0 animate-[fadeUp_.85s_ease-out_both] [animation-delay:380ms] motion-reduce:animate-none">
                            <p className="mb-2 text-xs font-mono tracking-wider text-stellar-400">
                                Viewing
                            </p>

                            <div className="inline-flex gap-2 rounded-full bg-space-800/70 border border-white/10 backdrop-blur p-1 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
                                {BODIES.map((b) => {
                                    const active = b.id === activeBody;
                                    return (
                                        <button
                                            key={b.id}
                                            type="button"
                                            onClick={() => setActiveBody(b.id)}
                                            className={[
                                                "px-4 py-2 rounded-full text-sm transition",
                                                "focus:outline-none focus-visible:ring-2 focus-visible:ring-orbit-400/60",
                                                active
                                                    ? "bg-white/10 text-stellar-100"
                                                    : "text-stellar-300 hover:text-stellar-100 hover:bg-white/5",
                                            ].join(" ")}
                                        >
                                            {b.label}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>


                        <div className="mt-8 flex flex-wrap gap-2 opacity-0 animate-[fadeUp_.85s_ease-out_both] [animation-delay:420ms] motion-reduce:animate-none">
                            {["APOD", "Mars Rovers", "Near-Earth Objects", "EPIC Earth"].map((e) => (
                                <span
                                    key={e}
                                    className="inline-flex items-center rounded-full px-3 py-1.5 text-xs bg-white/5 border border-white/10 text-stellar-300 font-mono"
                                >
                                  {e}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* ================= RIGHT BODY ================= */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div
                            ref={moonWrapRef}
                            className="group relative w-80 sm:w-[26rem] lg:w-[32rem] xl:w-[40rem] will-change-transform
                         opacity-0 animate-[moonIn_.9s_ease-out_both] [animation-delay:180ms]
                         motion-reduce:animate-none"
                        >
                            {/* Crossfade suave ao trocar */}
                            <div key={activeBody} className="animate-[swap_.45s_ease-in-out_both] motion-reduce:animate-none">
                                {body.mediaType === "video" ? (
                                    <video
                                        src={body.src}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        preload="auto"
                                        poster={body.poster}
                                        controls={false}
                                        disablePictureInPicture
                                        disableRemotePlayback
                                        tabIndex={-1}
                                        aria-hidden="true"
                                        className={[
                                            "w-full h-full object-contain select-none rounded-full pointer-events-none",
                                            "transition-transform duration-700 ease-out",
                                            "group-hover:scale-[1.03]",
                                            "drop-shadow-[0_30px_90px_rgba(0,0,0,0.55)]",
                                        ].join(" ")}
                                    />
                                ) : (
                                    <img
                                        src={body.src}
                                        alt={body.label}
                                        className="w-full h-full object-contain select-none rounded-full pointer-events-none"
                                        draggable={false}
                                    />
                                )}
                            </div>

                            <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_-40px_80px_rgba(0,0,0,0.55)] transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}