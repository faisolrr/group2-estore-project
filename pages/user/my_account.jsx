import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import { MyAccount } from "../../components/Card";

function my_account() {
	const [datas, setDatas] = useState([]);
	const [loading, setLoading] = useState(true);
	const [account, setAccount] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const requestOptions = {
			method: "GET",
		};

		fetch(
			"https://virtserver.swaggerhub.com/vaniliacahya/E-Store/1.0.0/users",
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => {
				const { data } = result;
				if (data) {
					setDatas(data.order);
				}
				if (data) {
					setAccount(data);
				}
			})
			.catch((error) => alert(error.toString()))
			.finally(() => setLoading(false));
	};
	if (loading) {
		return <div>Please wait...</div>;
	} else {
		return (
			<div className="h-auto w-full bg-[#eeee]">
				<Header />
				<div className="flex flex-row">
					<div className="flex flex-col bg-[#524F4F] w-44 md:w-60 lg:w-80 h-screen p-5 gap-y-4">
						<p className="font-bold text-xl">My Account</p>
						<hr className="px-14" />
						<p>{account.name}</p>
						<p>{account.email}</p>
						<p>{account.address}</p>
						<p>{account.phone}</p>
						<Link href="./edit_account">
							<button className="px-4 py-2 w-auto bg-[#557EBC] text-white rounded-md md:text-lg lg:text-md">
								Update Profile
							</button>
						</Link>
					</div>
					<div className="flex flex-col">
						<h1 className="text-black text-center font-bold my-6 p-0 md:p-12 lg:p-12 text-2xl md:text-4xl lg:text-5xl">
							My Order History
						</h1>
						<div className="mx-8 md:mx-16">
							<table className="w-full table-fixed">
								<thead>
									<tr className="text-xs md:text-lg lg:text-lg font-bold text-black border-b-2 border-neutral-400 pb-3">
										<td>ORDER ID</td>
										<td>DATE</td>
										<td>PRICE (IDR)</td>
										<td>ACTION</td>
									</tr>
								</thead>
							</table>
							<div className="grid gap-4">
								{datas.map((data) => (
									<MyAccount
										key={data.order}
										id={data.order}
										date={data.created_at}
										total={data.total}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default my_account;
