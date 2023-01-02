import { useEffect, useState } from "react";
import $ from 'jquery';
import { colorLuminance } from '../utils/utils';
import style from './Nav.module.scss';

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
    "red": { primary: "#941c24", secondary: "#f5f0f6" },
    "ired": { primary: "#dbdbdb", secondary: "#941c24" },
    "green": { primary: "#1c9428", secondary: "#7dff9d" },
    "purple": { primary: "#582aa3", secondary: "#dbdbdb" },
    "pink": { primary: "#972aa3", secondary: "#ffffff" },
    "cyan": { primary: "#2a99a3", secondary: "#000000" },
    "yellow": { primary: "#d1c819", secondary: "#2e2e2e" }, //#a6981b
    "orange": { primary: "#c97516", secondary: "#e3b581" },
    "white": { primary: "#dbdbdb", secondary: "#2e2e2e" },
    "black": { primary: "#2e2e2e", secondary: "#dbdbdb" },
    "ypaper": { primary: "#d5c4a1", secondary: "#282828" },
    "bar": { primary: "#1c1c1c", secondary: "#f78707" },
}

interface NavProp {
    current: number,
    onNavigate: (arg: number) => void,
}

export default function Nav(prop: NavProp) {
    const [themeName, setThemeName] = useState("ired");
    const [nmenu, setNMenu] = useState(false);
    const [dmenu, setDMenu] = useState(false);
    const titles = ["home", "skills", "projects", "more"];
    const icons = [
        <svg className={style.icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" />
        </svg>,
        <svg className={style.icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M5 19h-4v-4h4v4zm6 0h-4v-8h4v8zm6 0h-4v-13h4v13zm6 0h-4v-19h4v19zm1 2h-24v2h24v-2z" />
        </svg>,
        <svg className={style.icon} clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="m22 17.75c0-.414-.336-.75-.75-.75h-9.5c-.414 0-.75.336-.75.75s.336.75.75.75h9.5c.414 0 .75-.336.75-.75zm-19.749-1.377 2.172 1.936c.144.128.324.191.502.191.204 0 .408-.082.557-.244l3.677-4.02c.131-.145.197-.326.197-.506 0-.413-.334-.751-.753-.751-.205 0-.408.082-.558.244l-3.174 3.47-1.616-1.44c-.144-.128-.323-.191-.502-.191-.418 0-.753.338-.753.751 0 .206.084.412.251.56zm15.749-2.623c0-.414-.336-.75-.75-.75h-5.5c-.414 0-.75.336-.75.75s.336.75.75.75h5.5c.414 0 .75-.336.75-.75zm-15.749-5.356 2.172 1.936c.144.128.324.191.502.191.204 0 .408-.082.557-.244l3.677-4.02c.131-.144.197-.326.197-.506 0-.412-.334-.751-.753-.751-.205 0-.408.082-.558.244l-3.174 3.471-1.616-1.44c-.144-.128-.323-.192-.502-.192-.418 0-.753.338-.753.752 0 .206.084.411.251.559zm17.749 1.356c0-.414-.336-.75-.75-.75h-7.5c-.414 0-.75.336-.75.75s.336.75.75.75h7.5c.414 0 .75-.336.75-.75zm2-4c0-.414-.336-.75-.75-.75h-9.5c-.414 0-.75.336-.75.75s.336.75.75.75h9.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero" />
        </svg>,
        <svg className={style.icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z" />
        </svg>
    ];

    const onClickNMenu = () => {
        setNMenu(true);
    }

    const onClickThemeMenu = () => {
        setDMenu(true);
    }

    const onThemeSelected = (name: string) => {
        setDMenu(false);
        setThemeName(name);
    }

    const onClickOverLay = () => {
        setDMenu(false);
        setNMenu(false);
    }

    const onClickMenuItem = (ind: number) => {
        setNMenu(false);
        prop.onNavigate(ind);
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
    }, [themeName]);

    return <nav className={style.navbar}>
        <div className={(dmenu || nmenu) ? style.overlay : style.hiddenOverlay} onClick={onClickOverLay}>
        </div>
        <div className={style.bannerCont}>
            <svg width="400" height="600" className="banner" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g className={style.banner}>
                    <path d="M400 0H0C50 160 50 340 0 500C100 500 160 520 200 600C240 520 300 500 400 500C350 340 350 160 400 0Z" fill="#6143DA" />
                </g>
            </svg>
        </div>
        <div className={style.navi}>
            <div className={style.nbtn} onClick={onClickNMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
                </svg>
            </div>
            <ul className={nmenu ? style.nmenu : style.hiddenNMenu}>
                {titles.map((title: string, ind: number) =>
                    <li onClick={() => onClickMenuItem(ind)} className={style.nitem}>
                        {icons[ind]}
                        <span>{title}</span>
                    </li>
                )}
            </ul>
        </div>
        <ul className={style.menus}>
            {titles.map((text: string, ind: number) =>
                <li className={`${style.navItem} ${prop.current === ind ? style.current : ""}`} onClick={() => onClickMenuItem(ind)}>
                    <div className={style.layout}>
                        {icons[ind]}
                        <div>{text}</div>
                    </div>
                </li>
            )}
        </ul>
        <div className={style.dropdown} onClick={onClickThemeMenu}>
            <div className={style.dropdownBtn}>{themeName}</div>
            <ul className={dmenu ? style.dropdownMenu : style.hiddenDMenu}>
                {Object.keys(colors).map((name: string) => <li className={style.dropdownItem} onClick={() => onThemeSelected(name)}>{name}</li>)}
            </ul>
        </div>
    </nav>;
}
