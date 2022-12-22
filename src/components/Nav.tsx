import { useEffect, useState } from "react";
import $ from 'jquery';
import { colorLuminance } from '../utils/utils';

const diff = 0.3;

interface Duet {
    primary: string,
    secondary: string,
}

type Color = {
    [key: string]: Duet;
}

const colors: Color = {
    "blue": { primary: "#2a3da3", secondary: "#b8c2ff" },
    "red": { primary: "#941c24", secondary: "#232324" },
    "green": { primary: "#1c9428", secondary: "#7dff9d" },
    "purple": { primary: "#582aa3", secondary: "#bc81e3" },
    "pink": { primary: "#972aa3", secondary: "#e381bf" },
    "cyan": { primary: "#2a99a3", secondary: "#81e1e3" },
    "yellow": { primary: "#a6981b", secondary: "#e3e181" },
    "orange": { primary: "#c27013", secondary: "#e3b581" },
    "white": { primary: "#dbdbdb", secondary: "#2e2e2e" },
    "black": { primary: "#2e2e2e", secondary: "#dbdbdb" },
    "ypaper": { primary: "#d5c4a1", secondary: "#282828" },
}

export default function Nav() {
    const [themeName, setThemeName] = useState("white");

    const onClickThemeMenu = () => {
        $(".dropdown-menu").css({
            "display": "block",
        });
    }

    useEffect(() => {
        $(":root").css({
            "--primary-color": colors[themeName].primary,
            "--primary-darken-sha": colorLuminance(colors[themeName].primary, diff * -1),
            "--primary-lighten-sha": colorLuminance(colors[themeName].primary, diff),
            "--secondary-color": colors[themeName].secondary,
            "--secondary-darken-sha": colorLuminance(colors[themeName].secondary, diff * -1),
            "--secondary-lighten-sha": colorLuminance(colors[themeName].secondary, diff)
        });
        $(".dropdown-menu").css({
            "display": "none",
        });
    }, [themeName]);

    return <nav className="navbar">
        <div className="banner-cont">
            <svg width="400" height="600" className="banner" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="banner">
                    <path d="M400 0H0C50 160 50 340 0 500C100 500 160 520 200 600C240 520 300 500 400 500C350 340 350 160 400 0Z" fill="#6143DA" />
                </g>
            </svg>
        </div>
        <ul>
            <li className="nav-item dropdown" onClick={onClickThemeMenu}>
                <div className="dropdown-btn">{themeName}</div>
                <ul className="dropdown-menu">
                    {Object.keys(colors).map((name: string) => <li className="dropdown-item" onClick={() => setThemeName(name)}>{name}</li>)}
                </ul>
            </li>
        </ul>
    </nav>;
}
