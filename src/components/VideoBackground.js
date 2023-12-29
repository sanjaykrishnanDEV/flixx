import useTrailerFetch from "../customHooks/useTrailerFetch";
const VideoBackground = ({ movieId }) => {
  //fetch trailer video
  //a custom hook made for that purpose
  const trailerFetch = useTrailerFetch(movieId);

  return (
    <div className="w-fit h-screen ">
      <iframe
        className="z-0 w-screen h-screen "
        src={
          "https://www.youtube.com/embed/" +
          trailerFetch +
          "?autoplay=1&controls=1&rel=0&showInfo=0"
        }
        frameBorder="0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="1"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
