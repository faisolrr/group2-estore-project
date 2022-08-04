import Input from "../components/Input";
import { ButtonLarge } from "../components/Button";
import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { createContext } from "react";
import { TokenContext } from "../utils/context";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { token, setToken } = useContext(TokenContext);
	const [datas, setDatas] = useState([]);
	const [loading, setLoading] = useState(true);
	const [disabled, setDisabled] = useState(true);
	const router = useRouter();

	useEffect(() => {
		if (token !== "0") {
			router.push("/user/home_user");
		} else {
			if (email && password) {
				setDisabled(false);
			} else {
				setDisabled(true);
			}
		}
	}, [token, email, password]);

	const handleSubmit = async (e) => {
		setLoading(true);
		e.preventDefault();
		const body = {
			email,
			password,
		};
		var requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body),
		};
		fetch("https://rubahmerah.site/login", requestOptions)
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				const { code, message, data } = result;
				if (code === 200) {
					const { token } = data;
					localStorage.setItem("token", token);
					setToken(token);
					router.push("/user/home_user");
				}
				alert(message);
			})
			.catch((err) => {
				alert(err.toString());
			})
			.finally(() => setLoading(false));
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
