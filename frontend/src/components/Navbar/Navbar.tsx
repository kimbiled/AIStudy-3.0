import NavLink from "@ui/NavLink/NavLink";
import { animateScroll as scroll} from 'react-scroll';

import "./styles/navbar.scss";

interface Props {
	isActive: boolean;
}

export default function Navbar({ isActive }: Props) {
	const scrollTo = () => {
		scroll.scrollTo(1300); // Scrolling to 100px from the top of the page.
	  };
	return (
		<nav className={`navbar ${isActive ? "active" : ""}`}>
			<NavLink
				href={{
					pathname: "/",
				}}
				className="navbar__link"
			>
				Главная
			</NavLink>
			<a className="navbar__link cursor-pointer" onClick={()=>scrollTo()}>
				О Нас 
			</a>
			<NavLink
				href={{
					pathname: "/study",
				}}
				className="navbar__link"
			>
				Обучение
			</NavLink>

			{isActive? (<NavLink
				href={{
					pathname: "/auth/sign-in",
				}}
				className="navbar__link"
			>
				Войти
			</NavLink>) : ("")}
		</nav>
	);
}
