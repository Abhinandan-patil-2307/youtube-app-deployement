import React from 'react'
import { useSelector } from "react-redux";
import { iconColorDarkThem, iconColorLightTheme } from "../../utils/color";

const RepliesArrow = () => {
    const theme = useSelector(store => store.states.theme);
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            fill="#3f51b5"
            height="24"
            viewBox="0 -960 960 960"
            width="24">
            <path fill={theme === "light" ? iconColorLightTheme : iconColorDarkThem} d="M760-200v-160q0-50-35-85t-85-35H273l144 144-57 56-240-240 240-240 57 56-144 144h367q83 0 141.5 58.5T840-360v160h-80Z" />
        </svg>
    )
}

export default RepliesArrow;