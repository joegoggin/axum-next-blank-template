"use client";

import SunIcon from "@/components/icon/SunIcon";
import MoonIcon from "@/components/icon/MoonIcon";
import "./Nav.scss";

import { useEffect, useState } from "react";

const Nav: React.FC = () => {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);

    useEffect(() => {
        if (isDarkTheme) {
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
        }
    }, [isDarkTheme]);

    const toggleTheme = () => {
        setIsDarkTheme((prev) => !prev);
    };

    return (
        <div className="nav">
            <h4>Axum Next Template</h4>
            <div onClick={toggleTheme}>
                {isDarkTheme ? <SunIcon color="white" /> : <MoonIcon />}
            </div>
        </div>
    );
};

export default Nav;
