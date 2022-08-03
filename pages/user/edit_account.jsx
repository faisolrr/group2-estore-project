import React, { useContext, useState, useEffect } from "react";
import Input from "../../components/Input";
import { ButtonLarge } from "../../components/Button";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function EditAccount() {
	const [datas, setDatas] = useState([]);
	const [fullname, setFullname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [address, setAddress] = useState("");
	const [phonenumber, setPhonenumber] = useState("");

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		// const handleSubmit = (e) => {
		// 	e.preventDefault();
		// 	const body = JSON.stringify({
		// 		fullname,
		// 		email,
		// 		password,
		// 		address,
		// 		phonenumber,
		// 	});

		// const raw = JSON.stringify({
		// 	name: "Cindy",
		// 	email: "mbacin@gmail.com",
		// 	password: 1234,
		// 	address: "Jln. Baru No.4, Jakarta - Indonesia",
		// 	phone: "08123247689",
		// });

		// const requestOptions = {
		// 	method: "POST",
		// 	headers: myHeaders,
		// 	body,
		// 	redirect: "follow",
		// };

		// 	fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
		// 		.then((response) => response.json())
		// 		.then((result) => {
		// 			console.log(result);
		// 			if (result) {
		// 				setDatas(result);
		// 			}
		// 		})
		// 		.catch((error) => console.log("error", error));
		// };
	};
	return (
		<>
			<div className="bg-white h-auto">
				<h2 className="pt-6 pb-2 md:pb-2 text-center text-black text-3xl lg:text-4xl font-bold">
					Edit Account
				</h2>

				<form
					className="mb-4 mt-10 text-center flex flex-col gap-5"
					// onSubmit={(e) => handleSubmit(e)}
				>
					<Input
						type="text"
						placeholder="Update Fullname"
						onChange={(e) => setFullname(e.target.value)}
					/>

					<Input
						type="email"
						placeholder="Update Email"
						onChange={(e) => setEmail(e.target.value)}
					/>

					<Input
						type="password"
						placeholder="Update Password"
						onChange={(e) => setPassword(e.target.value)}
					/>

					<Input
						type="text"
						placeholder="Update Address"
						onChange={(e) => setAddress(e.target.value)}
					/>
					<Input
						type="text"
						placeholder="Update Phone Number"
						onChange={(e) => setPhonenumber(e.target.value)}
					/>
					<Link href="./my_account">
						<ButtonLarge label="UPDATE" />
					</Link>
				</form>
			</div>
		</>
	);
}
