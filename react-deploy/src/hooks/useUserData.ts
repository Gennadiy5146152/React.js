import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { IUserData, meRequestAsync, meRequestError, meRequestSuccess } from "../store/me/actions";


export function useUserData() {
    //const [data, setData] = useState<IUserData>({})
    const data = useSelector<RootState, IUserData>(state => state.me.data);
    const loading = useSelector<RootState, boolean>(state => state.me.loading);
    const stateToken = useSelector<RootState, string>(state => state.token)
    const dispatch = useDispatch();
   // console.log(stateToken)

    useEffect(() => {
        if (!stateToken) return;
       dispatch(meRequestAsync())
    }, [stateToken]);
    return {
        data,
        loading,
    };
}