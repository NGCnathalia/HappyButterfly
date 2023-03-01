import React from 'react'
import { useState } from "react";
import { ListDreamCatcher } from '../ListProduct/ListDreamCatcher';
import styleNavSecond from "./NavSecond.module.css"

export const NavDreamCatcher = () => {
    const [clickAll, setClickAll] = useState(true);
    const [clickClassic, setClickClassic] = useState(false);
    const [ClickPersonalized, setClickPersonalized] = useState(false);

    function clicks(num) {
        console.log("entro");

        setClickClassic(false);
        setClickPersonalized(false);

        switch (num) {
            case 1:
                setClickAll(false);
                
                setClickClassic(true);
                break;
            case 2:
                setClickAll(false);
              
                setClickPersonalized(true);
                break;
            default:
                console.log("sorry");
                break;
        }
    }

    return (
        <div>
            <nav className={styleNavSecond.navDreamCatcher}>
                <a onClick={() => { clicks(1) }}> <h2>Clásicos</h2> </a>
                <a onClick={() => { clicks(2) }}> <h2>Personalizados</h2> </a>

            </nav>
            <div>
                {clickAll ? <ListDreamCatcher nameFilter="all" /> : ""
                }
                {clickClassic ? <ListDreamCatcher nameFilter="classic" /> : ""
                }
                {ClickPersonalized ? <ListDreamCatcher nameFilter="personalized" /> : ""
                }

            </div>
        </div>
        
    )
}
