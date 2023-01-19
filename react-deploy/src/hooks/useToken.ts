import { useEffect, useState } from "react";

declare const window: any;
// interface window {
//     __token__: string;
//   }
export function useToken(): string[] {
    
    
    const [token, setToken] = useState('');

    useEffect(() => {
        if (window.__token__) {
            setToken(window.__token__)
        }
    }, [])
    return [token]
}