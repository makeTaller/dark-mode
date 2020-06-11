import { useState } from "react";

export const useLocalState =(key,initialValue) =>{

    const [storedValue,setStoredValue] = useState( () =>{
//register the initial state values
        const item = window.localStorage.getItem(key)
//if values are not set set them to the localStorage
        return item ? JSON.parse(item) : initialValue;
        
    })

    const setValue = (value) =>{

        setStoredValue(value);

        window.localStorage.setItem(key, JSON.Stringify(value))
}}


    return [storedValue]
}
