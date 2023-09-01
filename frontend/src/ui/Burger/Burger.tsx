import { Dispatch, SetStateAction } from "react";

import "./styles/burger.scss";

interface Props {
	showBurger: boolean;
	setShowBurger: Dispatch<SetStateAction<boolean>>;
}

export default function Burger({ showBurger, setShowBurger }: Props) {
	return (
		<button
			className={"burger" + " " + (showBurger ? "active" : "")}
			onClick={() => {
				setShowBurger((prevState) => !prevState);
			}}
			type={"button"}
			title={"menu"}
		>
			<span />
			<span />
			<span />
		</button>
	);
}
