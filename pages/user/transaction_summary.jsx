import React from "react";
import Header from "../../components/Header";
import Link from "next/link";
import { ButtonLarge, ButtonSmall } from "../../components/Button";

function transaction_summary() {
	return (
		<div className="bg-[#EEEEEE] w-full">
			<Header />
			<div className="flex w-full">
				<img
					className="w-96 h-auto p-12"
					src="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
				/>
				<div className="flex flex-col">
					<p className="text-black font-bold text-3xl p-12">ARMY T-SHIRT</p>
					<p className="text-black pl-12 pb-5 text-xl">ID Order : #126C</p>
					<p className="text-black pl-12 pb-5 text-xl">QTY : 2 Pcs</p>
					<p className="text-black pl-12 pb-5 text-xl">Stok : 100 Pcs</p>
					<hr className="bg-black w-3/4 px-96 ml-12" />
					<div className="flex flex-row">
						<p className="text-black pl-12 py-5 text-xl font-bold">TOTAL IDR</p>
						<p className="text-black pl-12 py-5 text-xl">299.000</p>
					</div>
					<div className="flex flex-row justify-between">
						<p className="text-black font-semibold ml-12 px-12 py-14 text-xl bg-[#D9D9D9]">
							Transfer ke Rekening BCA 034274218
						</p>
						<div className="pl-12 py-14">
							<ButtonSmall label="Pay" />
						</div>
						<div className="pl-12 pr-5 py-14">
							<ButtonSmall label="Cancel" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default transaction_summary;
