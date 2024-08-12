import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
    return (
        <div className="navigation">
            <div className="navigation_inside">
                <div className="menu_gauche">
                    <img src={require("../images/infra3.jpg").default} alt="logo"/>
                </div>
                <div className="menu_droite">
                    <ul>
                        <NavLink to="/"   exact activeClassName="nav-active" className="hover">
                            <li><span>Accueil</span></li>
                        </NavLink>
                        <NavLink to="/nos_metiers" exact activeClassName="nav-active" className="hover">
                            <li><span>Nos Metiers</span></li>
                        </NavLink>
                        <NavLink to="/nos_realisations"   exact activeClassName="nav-active" className="hover">
                            <li><span>Nos Realisations</span></li>
                        </NavLink>
                        <NavLink to="/contact"  exact activeClassName="nav-active" className="hover" >
                            <li><span>Contact</span></li>
                        </NavLink>

                    </ul>

                </div>
            </div>

        </div>
    )
}
