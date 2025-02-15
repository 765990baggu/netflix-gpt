const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute text-white pt-[17%] px-5 md:px-14 bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-xl md:text-4xl font-bold">{title}</h1>
      <p className="hidden  md:inline-block py-3 w-1/3">{overview}</p>
      <div className="my-2 md:m-0">
        <button className="font-bold py-1 md:py-2 px-3 md:px-12 m-1 text-black bg-white rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="hidden md:inline-block p-2 px-12 m-1 text-white bg-gray-500 rounded-lg bg-opacity-50">
          MoreInfo
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
