import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import logo from "../../assets/icon/logo.jpeg"
import search from "../../assets/icon/search.png"
import car from "../../assets/icon/car.png"
import styleCss from "./NavFirst.module.css"

export const NavFirst = () => {
    return (
        <header>
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
            <ul className={styleCss.navFirstUl2}>
                <li>
                    <Link to="/amigurumis">
                        <h1>Amigurumis</h1>
                    </Link>
                </li>
                <li>
                    <Link to="/accesories">
                        <h1>Accesorios</h1>
                    </Link>
                </li>
                <li>
                    <Link to="/dreamCatcher">
                        <h1>Atrapasueños</h1>
                    </Link>
                </li>
                <li>
                    <Link to="/clothes">
                        <h1>Ropa</h1>
                    </Link>
                </li>
            </ul>
            <Outlet />
        </nav>




        </header>
            )
}
