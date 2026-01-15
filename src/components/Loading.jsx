import { LoaderCircle } from 'lucide-react'

const Loading = () => {
    return (
        <div className="text-center p-16">
            <LoaderCircle className={ 'animate-spin w-12 h-12 mx-auto' } />
            <p>Loading spacial image...</p>
        </div>
    )
};

export default Loading;