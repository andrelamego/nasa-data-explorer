export default function Footer() {
    return (
        <footer className="pointer-events-none absolute bottom-4 inset-x-0 z-40">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex items-center justify-between text-xs text-stellar-400/80">
                    <a
                        href="https://github.com/andrelamego"
                        target="_blank"
                        rel="noreferrer"
                        className="pointer-events-auto hover:text-stellar-200 transition"
                    >
                        © {new Date().getFullYear()} André Lamego
                    </a>

                    <span className="font-mono">
                         Data provided by NASA APIs
                    </span>
                </div>
            </div>
        </footer>
    );
}
