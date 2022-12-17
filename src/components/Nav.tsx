import { useEffect, useState } from "react";
import $ from 'jquery';

interface Theme {
    name: string,
    primary: string,
    onPrimary: string,
    secondary: string
}

export default function Nav() {
    const retro: Theme = { name: "Retro", primary: "#d5c4a1", onPrimary: "#1d2021", secondary: "#83a698" /*"#928374"*/ };
    const gruvbox: Theme = { name: "Gruvbox", primary: "#cc241d", onPrimary: "#1d2021", secondary: "#ebdbb2" };
    const palenight: Theme = { name: "Palenight", primary: "#c792ea", onPrimary: "#202331", secondary: "#82aaff" };
    const themes = {
        [gruvbox.name]: gruvbox,
        [retro.name]: retro,
        [palenight.name]: palenight,
    }
    const [themeName, setThemeName] = useState(retro.name);

    const onClickThemeMenu = () => {
        $(".dropdown-menu").css({
            "display": "block",
        });
    }

    useEffect(() => {
        const selected = themes[themeName];
        $(":root").css({
            "--primary-color": selected.primary,
            "--on-primary": selected.onPrimary,
            "--secondary-color": selected.secondary
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
            <li className="nav-item">
                <a href="#information">address</a>
            </li>
            <li className="nav-item dropdown" onClick={onClickThemeMenu}>
                <div className="dropdown-btn">{themeName}</div>
                <ul className="dropdown-menu">
                    {Object.keys(themes).map((name: string) => <li className="dropdown-item" onClick={() => setThemeName(name)}>{name}</li>)}
                </ul>
            </li>
        </ul>
    </nav>;
}
