import React from 'react'
import { useState } from "react";
import { ListClothes } from '../ListProduct/ListClothes';
import styleNavSecond from "./NavSecond.module.css"

export const NavClothes = () => {
    const [clickAll, setClickAll] = useState(true);
    const [clickCropTop, setClickCropTop] = useState(false);
    const [ClickSwimsuit, setClickSwimsuit] = useState(false);

    function clicks(num) {
        console.log("entro");

        setClickCropTop(false);
        setClickSwimsuit(false);

        switch (num) {
            case 1:
                setClickAll(false);
                setClickCropTop(true);
                break;
            case 2:
                setClickAll(false);
                setClickSwimsuit(true);
                break;
            default:
                console.log("sorry");
                break;
        }
    }

    return (
        <div>
            <nav className={styleNavSecond.navClothes}>
                <a onClick={() => { clicks(1) }}> <h2>Crop Top</h2> </a>
                <a onClick={() => { clicks(2) }}> <h2>Traje de baño</h2> </a>

            </nav>
            <div>
                {clickAll ? <ListClothes nameFilter="all" /> : ""
                }
                {clickCropTop ? <ListClothes nameFilter="cropTop" /> : ""
                }
                {ClickSwimsuit ? <ListClothes nameFilter="swimsuit" /> : ""
                }

            </div>
        </div>
    )

}