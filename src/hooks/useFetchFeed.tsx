import { useEffect, useState } from "react";
import { FeedData } from "../interfaces/IFeedData.interface";
import fetchInstagramPost from "../service/fetchInstagramPost";


export default function useFetchFeed(token: string, limit: number) {

    const [feeds, setFeedsData] = useState<FeedData[]>([]);
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true);
    useEffect( () => {
        
        fetchInstagramPost(limit, token).then((res) => { 
            setFeedsData(res)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
            setError(err.message)
            setLoading(false)
         })
        
        return () => {
        };
    }, [limit, token]);
    
    return {feeds,setFeedsData, error, loading}
}