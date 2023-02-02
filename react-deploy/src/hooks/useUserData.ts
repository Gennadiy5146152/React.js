import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface IUserData {
    name?: string;
    iconImg?: string;
  }

export function useUserData() {
    const [data, setData] = useState<IUserData>({})
    const stateToken = useSelector<RootState, string>(state => state.token)
    useEffect(() => {
        if (stateToken) {
            axios.get('https://oauth.reddit.com/api/v1/me', {
                headers: {Authorization: `bearer ${stateToken}`}
                })
                .then((resp) => {
                    const userData = resp.data;
                    setData({name: userData.name, iconImg: userData.icon_img.split('?')[0]});
                })
                .catch(console.log);
            }
        },
         [stateToken]);
    return [data];
}