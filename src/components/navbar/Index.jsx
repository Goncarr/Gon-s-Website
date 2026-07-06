import { useEffect, useState } from 'react'
import './NavBar.css'

export default function NavBar({sonaUpdate}){
    const [dropMenu,setDropMenu] = useState(false);

    const handleThemeChange = (themeName) => {
        sonaUpdate(themeName);
        setDropMenu(false);
    };

    return (
        <>
                <nav>
                    <div className="header-container">
                        <div className="dropdown">
                            <button className="dropbtn" onClick={() => setDropMenu(!dropMenu)}>
                                <img/>
                            </button>
                            {dropMenu &&(
                                <div className="dropdown-content">
                                    <p onClick={(e) => handleThemeChange('banshee')}>
                                        <img src="sonas/banshee.png" alt="Banshee" />
                                        Banshee
                                    </p>
                                    <p onClick={(e) => handleThemeChange('gon')}>
                                        <img src="sonas/gon.jpg" alt="Gon" />
                                        Gon
                                    </p>
                                </div>
                                )
                            }
                        </div>

                        <ul>
                            <li><a href='#about'>ABOUT</a></li>
                            <li><a href='#art'>ART</a></li>
                            <li><a href='#socials'>SOCIALS</a></li>
                        </ul>
                    </div>
                </nav>
        </>
    )
}