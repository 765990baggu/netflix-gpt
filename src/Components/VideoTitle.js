const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute text-white pt-[17%] px-14 bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-3 w-1/3">{overview}</p>
      <div>
        <button className="font-bold p-2 px-12 m-1 text-black bg-white rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="p-2 px-12 m-1 text-white bg-gray-500 rounded-lg bg-opacity-50">
          MoreInfo
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
