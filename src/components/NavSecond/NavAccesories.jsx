import React from 'react'
import { useState } from "react";
import { ListAccesories } from '../ListProduct/ListAccesories';
import styleNavSecond from   "./NavSecond.module.css"

export const NavAccesories = () => {
    const [clickAll, setClickAll] = useState(true);
    const [clickEarrings, setClickEarrings] = useState(false);
    const [clickHandles, setClickHandles] = useState(false);
    const [clickKeyChains, setClickKeyChains] = useState(false);
    function clicks(num) {
        console.log("entro");

        setClickEarrings(false);
        setClickHandles(false);
        setClickKeyChains(false);

        switch (num) {
            case 1:
                setClickAll(false);
                setClickEarrings(true);
                break;
            case 2:
                setClickAll(false);
                setClickHandles(true);
                break;
            case 3:
                setClickAll(false);
                setClickKeyChains(true);
                break;
            default:
                console.log("sorry");
                break;
        }
    }

    return (
        <div>
            <nav className={styleNavSecond.navAccesories}>
                <a onClick={() => { clicks(1) }}> <h2>Aretes</h2> </a>
                <a onClick={() => { clicks(2) }}> <h2>Manillas</h2> </a>
                <a onClick={() => { clicks(3) }}> <h2>Llaveros</h2> </a>

            </nav>
            <div>
                {clickAll ? <ListAccesories nameFilter="all"/> : ""
                }
                {clickEarrings ? <ListAccesories nameFilter="earrings"/> : ""
                }
                {clickHandles ? <ListAccesories nameFilter="handles"/> : ""
                }
                {clickKeyChains ? <ListAccesories nameFilter="keyChains"/> : ""
                }

            </div>
        </div>
    )
}