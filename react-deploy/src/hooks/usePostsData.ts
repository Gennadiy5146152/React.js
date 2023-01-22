import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { tokenContext } from "../shared/context/tokenContext";

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
    const token = useContext(tokenContext)
    useEffect(() => {
        if (token.length>0) {
            axios.get('https://oauth.reddit.com/best.json?sr_detail=true&limit=10', {
                headers: {Authorization: `bearer ${token}`}
                })
                .then((resp) => {
                    const postData = resp.data.data.children;
                    setData(postData);
                })
                .catch(console.log);
        }
            }, [token]);
    return [data];
}