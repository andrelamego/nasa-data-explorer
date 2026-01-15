const ErrorMessage = ({ message, onRetry }) => {
    return (
        <div className="text-center p-8 rounded-lg">
            <h3 className="mb-4">
                Something gone wrong!
            </h3>
            <p>{message}</p>
            {onRetry && (
                <button
                    onClick={onRetry}
                    className="mt-4 px-2 py-6 border-none rounded-md cursor-pointer"
                >
                    Retry
                </button>
            )}
        </div>
    )
}

export default ErrorMessage;