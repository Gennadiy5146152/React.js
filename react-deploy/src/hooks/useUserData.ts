import axios from "axios";
import { useEffect, useState } from "react";

interface IUserData {
    name?: string;
    iconImg?: string;
  }

export function useUserData(token: string) {
    const [data, setData] = useState<IUserData>({})

    useEffect(() => {
        axios.get('https://oauth.reddit.com/api/v1/me', {
        headers: {Authorization: `bearer ${token}`}
        })
        .then((resp) => {
            console.log(resp)
            const userData = resp.data;
            setData({name: userData.name, iconImg: userData.icon_img});
        })
        .catch(console.log);
    }, [token]);
    return [data];
}