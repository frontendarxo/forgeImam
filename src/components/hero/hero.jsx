import { Button } from '../button/startButton';
import './hero.css';
import heroIMG from '../../assets/img/hero_bg2.png'

export function Hero() {
    return (
        <div className="hero">
            <div className="hero__content">
                <img src={heroIMG} alt='Imam IMG' className='animated-background'/>
                <div className="hero__text">
                    <h1 className="hero__title animated-from-left">
                        Imam - Personal trainer
                    </h1>
                    <p className="hero__abstr animated-from-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                        amet voluptatem quos maiores dolore error, nostrum quisquam rem
                        ipsum excepturi mollitia.
                    </p>
                    <div className="animated-from-left">
                        <Button />
                    </div>
                    <div className="bg-text"></div>
                </div>
            </div>
        </div>
    );
}
