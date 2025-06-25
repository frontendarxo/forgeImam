import { useState } from 'react';
import { Button } from '../../components/button/startButton';
import { Logo } from '../../components/logo/logo';

export function Nav() {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="nav">
            <Logo />
            <ul className={`nav__list ${menuOpen ? 'nav__list--open' : ''}`}>
                <li className="nav__item">
                    <a href="#about">Обо мне</a>
                </li>
                <li className="nav__item">
                    <a href="#Услуги">Услуги</a>
                </li>
                <li className="nav__item">
                    <a href="#">Отзывы клиентов</a>
                </li>
                <li className="nav__item">
                    <Button />
                </li>
            </ul>
            {/* <button className="nav__toggle" onClick={() => setMenuOpen((prev) => !prev)}> ☰ </button> */}
        </nav>
    );
}
