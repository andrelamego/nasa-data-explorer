export default function StickyFooter() {
    return (
        <footer className="border-t border-white/5">
            <div className="mx-auto max-w-7xl px-6 py-4">
                <div className="flex items-center justify-between text-xs text-stellar-400/80">
                    <a
                        href="https://github.com/andrelamego"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-stellar-200 transition"
                    >
                        © {new Date().getFullYear()} André Lamego
                    </a>
                    <span className="font-mono">Data provided by NASA APIs</span>
                </div>
            </div>
        </footer>
    );
}