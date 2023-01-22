import React from "react"
import { usePostData } from "../../hooks/usePostsData"

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

export const postContext = React.createContext<Array<IPostContextData>>([])

export function PostContextProvider({children}: {children: React.ReactNode}) {
    const [data] = usePostData();

    return(
        <postContext.Provider value={data}>
            {children}
        </postContext.Provider>
    )
}

