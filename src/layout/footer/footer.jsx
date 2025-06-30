import './footer.css';
import instaIc from '../../assets/img/insta.png';
import telegramIc from '../../assets/img/telegram.png';

export function Footer() {

    const curYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="footer__contant">
                <div className="footer__nav">
                    <h6 className="footer__title">Меню сайта</h6>
                    <p className="paragraph"><a href="#about-me">Обо мне </a></p>
                    <p className="paragraph"><a href="#program">Моя программа </a></p>
                    <p className="paragraph"><a href="#product">Тарифы </a></p>
                </div>
                <div className="footer__contacts">
                    <h6 className="footer__title">Автор сайта </h6>
                    <p className="paragraph">telegram: @salamov_7 </p>
                    <p className="paragraph">Insta: @frontendarxo </p>
                    <p className="paragraph">Number: +79280044043 </p>
                    <div className="footer__soc-media">
                        <a href="https://t.me/Salamov_7" target='_blank'>
                            <img
                                className='footer__icon'
                                src={telegramIc}
                                alt="telegram-logo"
                            />
                        </a>
                        <a href="https://www.instagram.com/frontendarxo" target='_blank'>
                            <img
                                className='footer__icon'
                                src={instaIc}
                                alt="insta-logo"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <br /> <hr /> <br />
            <div className="paragraph" style={{textAlign: 'center'}}>
               {curYear} © All rights reserved
            </div>
        </footer>
    );
}
