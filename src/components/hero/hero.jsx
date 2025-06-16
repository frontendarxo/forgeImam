import { Button } from "../button/startButton";
import './hero.css'

export function Hero() {
    return (
        <div className="hero">
            <div className="hero__content">
                <div className="animated-background"></div>
                <h1 className="hero__title animated-from-left">
                    Imam - Personal trainer
                </h1>
                <p className="hero__abstr animated-from-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi amet voluptatem quos maiores dolore error, nostrum quisquam rem ipsum excepturi mollitia.
                </p>
                <div className="animated-from-left"><Button /></div>
            </div>
        </div>
    )
}