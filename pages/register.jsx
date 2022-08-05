import React, { useContext, useState, useEffect } from "react";
import Input from "../components/Input";
import { ButtonLarge } from "../components/Button";
import { useRouter } from "next/router";

export default function SignUp() {
	const [datas, setDatas] = useState([]);
	const [nama, setNama] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [disabled, setDisabled] = useState(true);

	useEffect(() => {
		if (nama && email && password && address && phone) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [nama, email, password, address, phone]);

	const handleSubmit = async (e) => {
		setLoading(true);
		e.preventDefault();
		const body = {
			nama,
			email,
			password,
			address,
			phone,
		};
		var requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body),
		};
		fetch("https://rubahmerah.site/users", requestOptions)
			.then((response) => response.json())
			.then((result) => {
				const { message, code, data } = result;
				if (code === 200) {
					router.push("/login");
				}
				alert(message);
			})
			.catch((error) => {
				alert(error.toString());
			})
			.finally(() => setLoading(false));
	};

	return (
		<>
			<div className="bg-white h-auto">
				<h2 className="pt-6 pb-2 md:pb-2 text-center text-black text-4xl md:text-5xl lg:text-6xl font-bold">
					Register
				</h2>

				<form
					className="mb-4 mt-10 text-center flex flex-col gap-5"
					onSubmit={(e) => handleSubmit(e)}
				>
					<Input
						type="text"
						placeholder="Fullname"
						onChange={(e) => setNama(e.target.value)}
					/>

					<Input
						type="email"
						placeholder="Email"
						onChange={(e) => setEmail(e.target.value)}
					/>

					<Input
						type="password"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
					/>

					<Input
						type="text"
						placeholder="Address"
						onChange={(e) => setAddress(e.target.value)}
					/>
					<Input
						type="text"
						placeholder="Phone Number"
						onChange={(e) => setPhone(e.target.value)}
					/>

					<ButtonLarge label="SIGN UP" loading={loading || disabled} />
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
