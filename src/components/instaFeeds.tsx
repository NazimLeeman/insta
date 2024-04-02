
import Feed from "./Feed";
import "./instaFeeds.css";
import { InstaFeedsProps } from "../interfaces/IInstaFeedsProps.interface";
import useFetchFeed from "../hooks/useFetchFeed";

const InstaFeeds: React.FC<InstaFeedsProps> = ({ token, limit }) => {
  const {feeds, error, loading} = useFetchFeed(token, limit);
  return (
    <div className="img-container">
      {!error && feeds?.map((feed) => (
        <Feed key={feed.id} feed={feed} />
      ))}
      { error &&
        <>{ error}</>
      }
      {loading && <p>Loading...Thank you for your paitence</p> }
    </div>
  );
};

export default InstaFeeds;
