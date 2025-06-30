import { Logo } from '../../components/logo/logo';

export function Nav() {

    return (
        <nav className="nav">
            <Logo />
            <ul className='nav__list'>
                <li className="nav__item">
                    <a href="#about-me">Обо мне</a>
                </li>
                <li className="nav__item">
                    <a href="#program">О продукте</a>
                </li>
                <li className="nav__item">
                    <a href="#product">Тарифы</a>
                </li>
            </ul>
        </nav>
    );
}
