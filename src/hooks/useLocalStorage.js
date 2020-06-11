import { useState } from "react";

export const useLocalState =(key,initialValue) =>{

    const [storedValue,setStoredValue] = useState( () =>{

        const item = window.localStorage.getItem(key)

        return item ? JSON.parse(item) : initialValue;
        
    })


}
