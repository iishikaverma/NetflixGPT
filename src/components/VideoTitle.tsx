type VideoTitleProps = {
  title: string;
  overview: string;
};
const VideoTitle = ({title,overview}:VideoTitleProps) => {
    return (
        <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-6xl font-bold">
                {title}
            </h1>
            <p className="py-6 text-lg  w-1/4">
                {overview}
            </p>
            <div>
                <button className="bg-white text-black p-3 px-10 text-xl  rounded-md hover:bg-opacity-70">
                    ► Play
                </button>
                <button className="bg-gray-500 mx-2 text-white p-3 px-10 text-xl bg-opacity-50 rounded-md">
                    More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle