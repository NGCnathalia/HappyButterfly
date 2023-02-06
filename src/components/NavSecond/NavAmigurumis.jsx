import React from 'react'
import { useState } from "react";
import { ListAmigurumis } from '../ListProduct/ListAmigurumis';
import styleNavSecond from   "./NavSecond.module.css"

export const NavAmigurumis = () => {
    const [clickAll, setClickAll] = useState(true);
    const [clickSmall, setClickSmall] = useState(false);
    const [ClickMedium, setClickMedium] = useState(false);
    const [clickLarge, setClickLarge] = useState(false);

    function clicks(num) {
        console.log("entro");

        setClickSmall(false);
        setClickMedium(false);
        setClickLarge(false);

        switch (num) {
            case 1:
                setClickAll(false);
                setClickSmall(true);
                break;
            case 2:
                setClickAll(false);
                setClickMedium(true);
                break;
                case 3:
                setClickAll(false);
                setClickLarge(true);
                break;
            default:
                console.log("sorry");
                break;
        }
    }

    return (
        <div>
            <nav className={styleNavSecond.navAmigurumis}>
                <a onClick={() => { clicks(1) }}> <h3>Pequeño</h3> </a>
                <a onClick={() => { clicks(2) }}> <h3>Mediano</h3> </a>
                <a onClick={() => { clicks(3) }}> <h3>Grande</h3> </a>

            </nav>
            <div>
                {clickAll ? <ListAmigurumis nameFilter="all"/> : ""
                }
                {clickSmall ? <ListAmigurumis nameFilter="small"/> : ""
                }
                {ClickMedium ? <ListAmigurumis nameFilter="medium"/> : ""
                }
                {clickLarge ? <ListAmigurumis nameFilter="large"/> : ""
                }
            </div>
        </div>
    )
}