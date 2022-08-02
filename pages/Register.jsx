import React, { useContext, useState } from "react";
import Input from "../components/Input";
import { ButtonLarge } from "../components/Button";
import styles from "../styles/Home.module.css";

export default function SignUp() {
	return (
		<>
			<div className="bg-white h-auto">
				<h2 className="pt-6 pb-2 md:pb-2 text-center text-black text-3xl lg:text-4xl font-bold">
					Register
				</h2>

				<form
					className="mb-4 mt-10 text-center flex flex-col gap-5"
					onSubmit={(e) => handleSubmit(e)}
				>
					<Input
						type="text"
						placeholder="Fullname"
						onChange={(e) => setName(e.target.value)}
					/>

					<Input
						type="email"
						placeholder="Email"
						onChange={(e) => setUsername(e.target.value)}
					/>

					<Input
						type="password"
						placeholder="Password"
						onChange={(e) => setNumberPhone(e.target.value)}
					/>

					<Input
						type="text"
						placeholder="Address"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Input
						type="text"
						placeholder="Phone Number"
						onChange={(e) => setPassword(e.target.value)}
					/>

					<ButtonLarge label="SIGN UP" />
				</form>

				<p className="text-center text-black  lg:text-xl">
					Have an account?
					<button className="ml-1 hover:text-green-900 text-blue-800">
						Log In
					</button>
				</p>
			</div>
		</>
	);
}
