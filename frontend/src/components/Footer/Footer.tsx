"use client";
import Image from 'next/image';
import { facebook, instagram, whatsapp, twitter, telegram } from '@root/assets/icons';
import "./styles/footer.scss";
export default function Footer() {
	const handleScrollTop = () =>{
		window.scrollTo({top:0, behavior:'smooth'})
	};

	return (
		<footer className={"footer font-lato"}>
			<div className='container footer'>
				<div className='footer__icons'>
					<div>
						<h1 className="footer__icons-logo">ai</h1>
					</div>
					<div className='footer__icons-media'>
						<Image src={instagram} alt='instagram'/>
						<Image src={facebook} alt='facebook'/>
						<Image src={whatsapp} alt='whatsapp'/>
						<Image src={telegram} alt='telegram'/>
					</div>
				</div>
	
				<div className='footer__navigation'>
					<div>
						<ul className='footer__navigation-list'>
							<li className='footer__navigation-list-first'>Карта сайта</li>
							<a onClick={handleScrollTop}><li>Главная</li></a>
							<a href="/about"><li>О нас</li></a>
							<a href="/study"><li>Обучение</li></a>
						</ul>
					</div>
					<div>
						<ul className='footer__navigation-list'>
							<li className='footer__navigation-list-first'>Свяжитесь с нами</li>
							<a href="tel:+7 (700) 518-78-69"><li>+7 (700) 518-78-69</li></a>
							<a href="mailto:aistudy@gmail.com"><li>aistudy@gmail.com</li></a>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}
