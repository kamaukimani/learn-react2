import React from 'react';
function Header(props){
    const {isDark,handleDarkMode}=props
    return(
        <button onClick={handleDarkMode}>{isDark ? "Light Mode" : "Dark Mode"}</button>
    )
}
export default Header;