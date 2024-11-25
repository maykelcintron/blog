import { useState, useEffect } from "react";
import AstroLogo from "../../assets/icons/Astro_light.svg";
import AstroDarkLogo from "../../assets/icons/Astro_dark.svg";
import SunIcon from "../../assets/icons/sun.svg";
import MoonIcon from "../../assets/icons/moon.svg";

export default function Header() {
  const [isDark, setIsDark] = useState(() => {
    const darkMode = localStorage.getItem('darkMode');
    return darkMode === 'true';
  });
  const [astroLogo, setAstroLogo] = useState(() => {
    const darkMode = localStorage.getItem('darkMode');
    return darkMode === 'true';
  });
  
  // Efecto para aplicar el tema al cargar
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark', 'dark:bg-gray-800');
    } else {
      document.documentElement.classList.remove('dark', 'dark:bg-gray-800');
    }
  }, []);
  
  const handleClick = () => {
    const newDarkMode = !isDark;
    document.documentElement.classList.toggle('dark');
    document.documentElement.classList.toggle('dark:bg-gray-800');
    
    localStorage.setItem('darkMode', newDarkMode);

    setIsDark(newDarkMode);
    setAstroLogo(newDarkMode);
  }

  return (
    <header id="header" className="dark:bg-[#1e2229] shadow-sm fixed top-0 left-0 w-full bg-white flex justify-center md:justify-between items-center py-4 px-10 border-b border-orange-600">
        <div className="flex items-center gap-2">
            <img src={astroLogo ? AstroDarkLogo : AstroLogo} alt="Logo" className="w-10 h-10 cursor-pointer"/>
            <h3 id="title-header" className="dark:text-white text-2xl font-bold -mt-1">DataBD</h3>
        </div>
        <img onClick={handleClick} id="sun" className="bg-[#1e2229] md:p-2 p-4 rounded-full cursor-pointer fixed bottom-10 right-5 md:static border-2 border-orange-600" src={isDark ? MoonIcon : SunIcon} alt="sun" />
    </header>
  )
}