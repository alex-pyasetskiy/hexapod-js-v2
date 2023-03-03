import React from "react"
import { PATH_LINKS } from "./vars"
import { Link } from "react-router-dom"

const NAV_BULLETS_PREFIX = "navBullet"
const NAV_DETAILED_PREFIX = "navDetailed"

const BulletPageLink = ({ link, showDesc }) => (
    <li>
        <Link to={link.path} className="link-icon">
            <span>
                {link.icon} {showDesc ? link.description : null}
            </span>
        </Link>
    </li>
)


const NavBullets = () => (
    <ul id="top-bar">
        {PATH_LINKS.map(link => (
            <BulletPageLink key={NAV_BULLETS_PREFIX + link.path} link={link} />
        ))}
    </ul>
)

const NavDetailed = () => (
    <footer>
        <nav id="nav">
            <ul className="grid-cols-1 no-bullet">

                {PATH_LINKS.map(link => (
                    <BulletPageLink
                        key={NAV_DETAILED_PREFIX + link.path}
                        link={link}
                        showDesc={true}
                    />
                ))}
            </ul>
        </nav>
    </footer>
)

const Nav = () => <NavBullets />

export { Nav, NavDetailed }
