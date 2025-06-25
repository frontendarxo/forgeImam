import { Button } from "../../components/button/startButton";
import { Logo } from "../../components/logo/logo"

export function Nav() {
    
    return (
        <nav className="nav">
            <Logo />
            <ul className="nav__list">
                <li className="nav__item"><a href="#about">Обо мне</a></li>
                <li className="nav__item"><a href="#">Услуги</a></li>
                <li className="nav__item"><a href="#">Отзывы клиентов</a></li>
                <li className="nav__item"><a href="#">Контакты</a></li>
                <li className="nav__item"><a href="#">Что-то еще</a></li>
                <li className="nav__item">
                    <Button />
                </li>
            </ul>
        </nav>
    );
}
