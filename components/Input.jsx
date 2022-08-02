import React from "react";
import styles from "../styles/Home.module.css";

export default function Input(props) {
	return (
		<div>
			<input
				className="pl-4 w-10/12 md:w-3/5 h-16  bg-[#D9D9D9] rounded-md"
				type={props.type}
				placeholder={props.placeholder}
				onChange={props.onChange}
			/>
		</div>
	);
}
