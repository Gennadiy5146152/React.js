
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { IUserData, meRequestAsync, meRequestError, meRequestSuccess, saveToken } from "../store/me/actions";


export function useUserData() {
    const data = useSelector<RootState, IUserData>(state => state.me.data);
    const loading = useSelector<RootState, boolean>(state => state.me.loading);
    const stateToken = useSelector<RootState, string>(state => state.token)
    const dispatch = useDispatch();

    useEffect(() => {
        if (!stateToken) return;
       dispatch(meRequestAsync())
    }, [stateToken]);
    return {
        data,
        loading,
    };
}