import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

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

export function usePostData() {
    const [data, setData] = useState<Array<IPostData>>([])
    const stateToken = useSelector<RootState, string>(state => state.token)
    useEffect(() => {
        if (stateToken.length>0) {
            axios.get('https://oauth.reddit.com/best.json?sr_detail=true&limit=3', {
                headers: {Authorization: `bearer ${stateToken}`}
                })
                .then((resp) => {
                    const postData = resp.data.data.children;
                    setData(postData);
                })
                .catch(console.log);
        }
            }, [stateToken]);
    return [data];
}