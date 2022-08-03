import Input from "../components/Input";
import { ButtonLarge } from "../components/Button";
import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Login() {
	const [datas, setDatas] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		const handleSubmit = (e) => {
			e.preventDefault();
			const body = JSON.stringify({
				email,
				password,
			});

			// const body = JSON.stringify({
			// 	email: "mbacin@gmail.com",
			// 	password: 1234,
			// });

			const requestOptions = {
				method: "POST",
				headers: myHeaders,
				body,
				redirect: "follow",
			};

			fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
				.then((response) => {
					response.json();
					if (response) {
						console.log(response);
					}
				})

				.then((result) => {
					console.log(result);
					if (result) {
						setDatas(result);
					}
				})
				.catch((error) => console.log("error", error));
		};
	};
	return (
		<>
			<div className="bg-white h-screen ">
				<div
					className="pt-20 mx-auto w-9/12 xxs:w-8/12 xs:w-7/12
         sm:w-3/5 md:w-6/12 lg:w-5/12 xl:w-5/12 flex justify-center items-center"
				>
					<h2 className="text-black text-4xl md:text-5xl lg:text-6xl font-bold">
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
						<Link id="signup" href="/register">
							<button className="ml-1 hover:text-green-900 text-blue-800">
								Sign Up
							</button>
						</Link>
					</p>
				</form>
			</div>
		</>
	);
}
