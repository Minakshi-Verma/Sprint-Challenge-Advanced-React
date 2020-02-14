import {useEffect} from 'react';


export const useDarkMode =(key, initialValue) =>{

    const[darkMode, setDarkMode] = useState (key, initialValue)
    
    useEffect(()=>{

    if(darkMode){
        return document.body.classList.add('dark-mode')
        
    }else{
        return document.body.classList.remove('dark-mode')
    }  

    },[darkMode])
    return [darkMode,setDarkMode]
    }