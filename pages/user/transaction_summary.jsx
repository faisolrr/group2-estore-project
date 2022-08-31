import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Link from "next/link";
import { ButtonLarge, ButtonSmall } from "../../components/Button";

function TransactionSummary() {
	const [datas, setDatas] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const requestOptions = {
			method: "GET",
		};

		fetch("https://rubahmerah.site/products", requestOptions)
			.then((response) => response.json())
			.then((result) => {
				const { data } = result;
				if (data) {
					setDatas(data);
				}
			})
			.catch((error) => alert(error.toString()))
			.finally(() => setLoading(false));
	};
	if (loading) {
		return <div>Please wait...</div>;
	} else {
		return (
			<div className="bg-[#EEEEEE] ">
				<Header />
				<div className="flex flex-row justify-center">
					<img className="p-5" src={datas[1].image} alt="clothes" width="200" />
					<div className="flex flex-col">
						<p className="text-black font-bold text-3xl pl-12 pt-12 pb-8">
							{datas[1].name}
						</p>
						<p className="text-black pl-12 pb-5 text-xl">
							{datas[1].productid}
						</p>
						<p className="text-black pl-12 pb-5 text-xl">QTY : 1</p>
						<p className="text-black  pb-5 text-xl border-b-2 border-b-black ml-12">
							Stok : 100 Pcs
						</p>
						<div className="flex flex-row">
							<p className="text-black pl-12 py-5 text-xl font-bold">
								TOTAL IDR
							</p>
							<p className="text-black pl-12 py-5 text-xl">{datas[1].price}</p>
						</div>
					</div>
				</div>
				<div className="flex flex-row justify-center">
					<p className="text-black font-semibold  p-5 mt-10 text-xl bg-[#D9D9D9]">
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

export default TransactionSummary;
