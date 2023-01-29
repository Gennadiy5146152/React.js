import axios from "axios";
import { useEffect, useState } from "react";

interface IPostData {
    data?: any,
    author?: string,
    image?: string,
    url?: string,
    title?: string,
    date?: any,
    score?: any,
    comments?: any,
  }

export function useCommentsData({id, subreddit}:any) {
    const [data, setData] = useState()
    useEffect(() => {
        axios.get(`https://api.reddit.com/r/${subreddit}/comments/${id}`)
            .then((resp) => {
                const postData: any = resp;
                setData(postData);
            })
            .catch(console.log);
    }, [id]);
    return [data];
}