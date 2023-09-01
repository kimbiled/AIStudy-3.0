"use client";
import { useState } from "react";

import Navbar from "@components/Navbar/Navbar";
import NavLink from "@ui/NavLink/NavLink";
import Burger from "@ui/Burger/Burger";

import "./styles/header.scss";

export default function Header() {
	const [showNav, setShowNav] = useState<boolean>(false);

	return (
		<header className="header">
			<h1 className="header__logo">ai</h1>
			<Navbar isActive={showNav} />
			<div className="header__nav">
				<NavLink
					href={{
						pathname: "/auth/sign-up",
					}}
					className={"header__nav-link"}
				>
					Регистрация
				</NavLink>
				<NavLink
					href={{
						pathname: "/auth/sign-in",
					}}
					className={"header__nav-link"}
				>
					Логин
				</NavLink>
			</div>
			<div
				className="header__profile"
				style={{
					display: "none", // temporary decision
				}}
			>
				<p className="header__profile-username">username</p>
			</div>
			<Burger showBurger={showNav} setShowBurger={setShowNav} />
		</header>
	);
}
