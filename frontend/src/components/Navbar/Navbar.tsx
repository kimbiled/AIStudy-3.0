import NavLink from "@ui/NavLink/NavLink";

import "./styles/navbar.scss";

interface Props {
	isActive: boolean;
}

export default function Navbar({ isActive }: Props) {
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
			<NavLink
				href={{
					pathname: "/about",
				}}
				className="navbar__link"
			>
				О Нас
			</NavLink>
			<NavLink
				href={{
					pathname: "/study",
				}}
				className="navbar__link"
			>
				Обучение
			</NavLink>
		</nav>
	);
}
