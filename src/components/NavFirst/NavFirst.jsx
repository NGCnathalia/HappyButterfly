import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import logo from "../../assets/icon/logo.jpeg"
import search from "../../assets/icon/search.png"
import car from "../../assets/icon/car.png"
import styleCss from "./NavFirst.module.css"

export const NavFirst = () => {
    return (
        <nav className={styleCss.navFirst}>
            <ul className={styleCss.navFirstUl}>
                <li>
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <h1>Happy Butterfly</h1>
                    </Link>
                </li>
                <li>
                    <Link to="/Products">
                        <div>
                            <img src={search} alt="search" />
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/ShoppingCar">
                        <div>
                            <img src={car} alt="car" />
                        </div>
                    </Link>
                </li>
            </ul>
            <Outlet />
        </nav>
    )
}
