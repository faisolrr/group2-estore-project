import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Link from "next/link";
import { ButtonLarge, ButtonSmall } from "../../components/Button";

function transaction_summary() {
	const [datas, setDatas] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const requestOptions = {
			method: "GET",
		};

		fetch(
			"https://virtserver.swaggerhub.com/vaniliacahya/E-Store/1.0.0/products",
			requestOptions
		)
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				if (result) {
					setDatas(result.data);
				}
			})
			.catch((error) => console.log("error", error))
			.finally(() => setLoading(false));
	};
	if (loading) {
		return <div>Please wait...</div>;
	} else {
		return (
			<div className="bg-[#EEEEEE] ">
				<Header />
				<div className="flex flex-row">
					<img
						className="w-56 h-72 p-12"
						src="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
					/>
					<div className="flex flex-col">
						<p className="text-black font-bold text-3xl pl-12 pt-12 pb-8">
							{datas[0].productname}
						</p>
						<p className="text-black pl-12 pb-5 text-xl">
							{datas[0].productid}
						</p>
						<p className="text-black pl-12 pb-5 text-xl">{datas[0].price}</p>
						{/* <p className="text-black  pb-5 text-xl border-b-2 border-b-black ml-12">
							Stok : 100 Pcs
						</p> */}
						<div className="flex flex-row">
							<p className="text-black pl-12 py-5 text-xl font-bold">
								TOTAL IDR
							</p>
							<p className="text-black pl-12 py-5 text-xl">299.000</p>
						</div>
					</div>
				</div>
				<div className="flex flex-row justify-between">
					<p className="text-black font-semibold ml-12 text-xl bg-[#D9D9D9]">
						Transfer ke Rekening BCA 034274218
					</p>
					<div className="pl-12 py-14">
						<ButtonSmall label="Pay" />
					</div>
					<div className="pl-12 pr-5 py-14">
						<Link href="./home_user">
							<ButtonSmall label="Cancel" />
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default transaction_summary;
