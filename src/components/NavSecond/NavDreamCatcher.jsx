import React from 'react'
import { useState } from "react";
import { ListDreamCatcher } from '../ListProduct/ListDreamCatcher';
import styleNavSecond from "./NavSecond.module.css"

export const NavDreamCatcher = () => {
    const [clickAll, setClickAll] = useState(true);
    const [clickLight, setClickLight] = useState(false);
    const [ClickDark, setClickDark] = useState(false);

    function clicks(num) {
        console.log("entro");

        setClickLight(false);
        setClickDark(false);

        switch (num) {
            case 1:
                setClickAll(false);
                setClickLight(true);
                break;
            case 2:
                setClickAll(false);
                setClickDark(true);
                break;
            default:
                console.log("sorry");
                break;
        }
    }

    return (
        <div>
            <nav className={styleNavSecond.navDreamCatcher}>
                <a onClick={() => { clicks(1) }}> <h3>Claro</h3> </a>
                <a onClick={() => { clicks(2) }}> <h3>Oscuro</h3> </a>

            </nav>
            <div>
                {clickAll ? <ListDreamCatcher nameFilter="all" /> : ""
                }
                {clickLight ? <ListDreamCatcher nameFilter="light" /> : ""
                }
                {ClickDark ? <ListDreamCatcher nameFilter="dark" /> : ""
                }

            </div>
        </div>
    )
}
