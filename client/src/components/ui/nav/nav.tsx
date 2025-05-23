"use client";

import Icon from "@/components/ui/icon/Icon";
import { IconType } from "@/types/icon/Icon";
import "./nav.scss";
import { useEffect, useState } from "react";
import { Colors } from "@/constants/color";

const Nav: React.FC = () => {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);

    useEffect(() => {
        if (isDarkTheme) {
            document.body.classList.add("dark-theme");
        } else {
            document.body.classList.remove("dark-theme");
        }
    }, [isDarkTheme]);

    const toggleTheme = () => {
        setIsDarkTheme((prev) => !prev);
    };

    return (
        <div className="nav">
            <h4>Axum Next Template</h4>
            <div onClick={toggleTheme}>
                {isDarkTheme ? (
                    <Icon
                        type={IconType.IONICONS}
                        name="sunny"
                        size={30}
                        color={Colors.white}
                    />
                ) : (
                    <Icon type={IconType.IONICONS} name="moon" size={30} />
                )}
            </div>
        </div>
    );
};

export default Nav;
