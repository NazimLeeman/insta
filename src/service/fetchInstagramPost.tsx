import axios from "axios";
import { config } from "../config";
import { FeedData } from "../interfaces/IFeedData.interface";

export default     async function fetchInstagramPost(limit : number , token : string) : Promise<FeedData[]>  {
     
               return  axios
                    .get(
                        `${config.instaGraphURL}&limit=${limit}&access_token=${token}`
                    )
                    .then((resp) => {
                        
                        return resp.data.data as FeedData[];
                    });
        
        }