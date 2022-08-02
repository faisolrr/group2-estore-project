import Input from "../components/Input";
import { ButtonLarge } from "../components/Button";
import React, { useContext, useState, useEffect } from "react";

export default function Login() {
	return (
		<>
			<div className="bg-white h-screen ">
				<div
					className="pt-20 mx-auto w-9/12 xxs:w-8/12 xs:w-7/12
         sm:w-3/5 md:w-6/12 lg:w-5/12 xl:w-5/12 flex justify-center items-center"
				>
					<h2 className="text-black text-xl xxs:text-2xl xs:text-3xl sm:text-4xl xl:text-5xl font-bold">
						Login
					</h2>
				</div>

				<form
					className="mb-4 mt-10 text-center flex flex-col gap-5"
					onSubmit={(e) => handleSubmit(e)}
				>
					<p className="text-black text-2xl">Email</p>
					<Input
						type="text"
						placeholder="Email"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<p className="text-black text-2xl">Password</p>
					<Input
						type="password"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
					/>

					<ButtonLarge label="LOGIN" />

					<p className="text-center text-black lg:text-xl">
						Dont't have an account?
						<button className="ml-1 hover:text-green-900 text-blue-800">
							Sign Up
						</button>
					</p>
				</form>
			</div>
		</>
	);
}
