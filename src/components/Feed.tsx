import { FeedProps } from "../interfaces/IFeedProps.interface";

const Feed: React.FC<FeedProps> = (props) => {
  const { id, caption, media_type, media_url } = props.feed;
  let post;

  switch (media_type) {
    case "VIDEO":
      post = (
        <video
          width="100%"
          height="auto"
          src={media_url}
          controls
        >
        </video>
      );
      break;
    case "CAROUSEL_ALBUM":
      post = (
        <img width="100%" height="auto" id={id} src={media_url} alt={caption} />
      );
      break;
    default:
      post = (
        <img width="100%" height="auto" id={id} src={media_url} alt={caption} />
      );
  }

  return <>{post}</>;
};

export default Feed;
