import React, { useContext, useState, useEffect } from "react";
import Input from "../../components/Input";
import { ButtonLarge } from "../../components/Button";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function EditAccount() {
	const [datas, setDatas] = useState([]);
	const [nama, setNama] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");

	const handleSubmit = async (e) => {
		setLoading(true);
		e.preventDefault();

		const formData = new FormData();
		for (const key in objSubmit) {
			formData.append(key, objSubmit[key]);
		}
		var requestOptions = {
			method: "PUT",
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
			body: formData,
		};

		fetch(
			"https://virtserver.swaggerhub.com/vaniliacahya/E-Store/1.0.0/users",
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				const { message } = result;
				alert(message);
				setObjSubmit({});
			})
			.catch((error) => alert("update failed"))
			.finally(() => fetchData());
	};

	return (
		<>
			<div className="bg-white h-auto">
				<h2 className="pt-6 pb-2 md:pb-2 text-center text-black text-4xl md:text-5xl lg:text-6xl font-bold">
					Edit Account
				</h2>

				<form
					className="mb-4 mt-10 text-center flex flex-col gap-5"
					onSubmit={(e) => handleSubmit(e)}
				>
					<Input
						type="text"
						placeholder="Update Fullname"
						onChange={(e) => setNama(e.target.value)}
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
						onChange={(e) => setPhone(e.target.value)}
					/>
					<Link href="./my_account">
						<ButtonLarge label="UPDATE" />
					</Link>
				</form>
			</div>
		</>
	);
}
