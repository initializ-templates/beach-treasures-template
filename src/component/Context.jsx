import React,{createContext, useState, useContext, useEffect} from 'react'

const beachContext = createContext()

 const Context = ({children}) => {
  const [nav, setNav] = useState(false);
   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

   useEffect(()=>{
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme;
   },[theme])

  const openNav = () => {
    setNav(true);
  }
  const closeNav = () => {
    setNav(false); 
  }

  const toggleTheme = ()=> {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

  }

  return (
    <beachContext.Provider value={{ nav,openNav,closeNav, theme, toggleTheme }}>
        {children}
    </beachContext.Provider>
  )
}

export const useGlobalContext = () => {
    return useContext(beachContext)
}
export {beachContext, Context}