import { AlertTriangle } from "lucide-react";

const ErrorMessage = ({ message, onRetry }) => {
    return (
        <div className="rounded-2xl border border-white/10 bg-space-800/60 backdrop-blur p-6 sm:p-8">
            <div className="flex items-start gap-3">
                <div className="mt-0.5 text-orbit-400">
                    <AlertTriangle size={18} />
                </div>

                <div className="flex-1">
                    <h3 className="font-display text-xl text-stellar-100">
                        Something went wrong
                    </h3>
                    <p className="mt-2 text-sm text-stellar-300/90 break-words">
                        {message}
                    </p>

                    {onRetry && (
                        <button
                            onClick={onRetry}
                            className="mt-5 inline-flex items-center justify-center rounded-xl
                         bg-orbit-500 px-5 py-2.5 text-sm font-medium text-white
                         hover:bg-orbit-400 transition"
                        >
                            Retry
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ErrorMessage;
