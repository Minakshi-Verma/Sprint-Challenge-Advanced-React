import {useState} from 'react';



const useDarkMode = () => {
    const[darkMode, setDarkMode] = useState(false)

    const onChange = () => {
        if(darkMode){
        //     return document.body.classList.add('dark-mode')
        // } else {
        //     return document.body.classList.remove('dark-mode')
           document.querySelector("body").classList.remove("dark-mode");
        } else {
          document.querySelector("body").classList.add("dark-mode");            
        }
       setDarkMode(!darkMode)
    }    
       return [darkMode, onChange]          
 }
      export default useDarkMode



// const useDarkMode = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const onChange = () => {
//     if (darkMode) {
//       document.querySelector("body").classList.remove("dark-mode");
//     } else {
//       document.querySelector("body").classList.add("dark-mode");
//     }
//     setDarkMode(!darkMode);
//   };

//   return [darkMode, onChange];
// };

// export default useDarkMode;
