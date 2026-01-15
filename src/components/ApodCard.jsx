const ApodCard = ({ data }) => {
    if (!data) return null;

    const isVideo = data.media_type === 'video';

    return (
        <div className="rounded-lg p-8 shadow-md bg-[#1a1f3a]">
            <h1 className="mb-2">
                {data.title}
            </h1>
            <p>
                {data.date}
            </p>

            <div className="mx-6 my-0 rounded-lg overflow-hidden">
                {isVideo ? (
                    <iframe
                        className="w-full h-auto min-h-100 block"
                        src={data.url}
                        title={data.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                ) : (
                    <img
                        className="w-full h-auto min-h-100 block"
                        src={data.url}
                        alt={data.title}
                        loading="lazy"
                    />
                )}
            </div>

            <div>
                <p>{data.explanation}</p>
                {data.copyright && (
                    <p className="mt-4 italic text-sm">© {data.copyright}</p>
                )}
            </div>
        </div>
    )
};

export default ApodCard;