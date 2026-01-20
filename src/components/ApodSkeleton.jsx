export default function ApodSkeleton() {
    return (
        <div className="rounded-2xl border border-white/10 bg-space-800/60 backdrop-blur overflow-hidden">
            <div className="p-6 sm:p-8 space-y-3">
                <div className="h-3 w-24 rounded bg-white/5 animate-pulse" />
                <div className="h-8 w-2/3 rounded bg-white/5 animate-pulse" />
            </div>

            <div className="aspect-video w-full bg-white/5 animate-pulse" />

            <div className="p-6 sm:p-8 space-y-3">
                <div className="h-4 w-full rounded bg-white/5 animate-pulse" />
                <div className="h-4 w-11/12 rounded bg-white/5 animate-pulse" />
                <div className="h-4 w-10/12 rounded bg-white/5 animate-pulse" />
                <div className="h-4 w-9/12 rounded bg-white/5 animate-pulse" />
            </div>
        </div>
    );
}
