import React from "react"
import { useCommentsData } from "../../hooks/useCommentsData";

interface IPostContextData {
    data?: any;
    author?: string,
    image?: string,
    url?: string,
    title?: string,
    date?: any,
    score?: any,
    comments?: any,
}

export const dataCommentsContext = React.createContext([])

export function PostContextProvider({children}: {children: React.ReactNode}) {
    //const [data] = useCommentsData();

    return(
        '1'
        // <dataCommentsContext.Provider value={}>
        //     {children}
        // </dataCommentsContext.Provider>
    )
}