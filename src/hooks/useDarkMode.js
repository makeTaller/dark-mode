import {useEffect} from "react";
import {useLocalStorage} from './useLocalStorage.js';

export const useDarkMode = () =>{

    const [darkmode, setDarkMode] = useLocalStorage("darky",darkmode)

    useEffect(() => {
    useLocalStorage ?  <body class="dark-mode"}> : <body>
    },[])

}
