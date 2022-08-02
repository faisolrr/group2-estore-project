import React from "react";
import { ButtonSmall } from "./Button";
function Header() {
	return (
		<div className="h-18 bg-white sticky top-0 flex justify-between">
			<p className="text-neutral-700 font-bold p-5 text-xl">E-STORE</p>
			<div className="p-5">
				<ButtonSmall label="Login" />
			</div>
		</div>
	);
}

export default Header;
