import React from "react";
import Link from "next/link";
import Header from "../../components/Header";

function my_account() {
	return (
		<div className="h-auto w-full bg-[#eeee]">
			<Header />
			<div className="flex flex-row">
				<div className="flex flex-col bg-[#524F4F] w-44 md:w-60 lg:w-80 h-screen p-5 gap-y-4">
					<p className="font-bold text-xl">My Account</p>
					<hr className="px-14" />
					<p>Mirzam Avicena</p>
					<p>sikakikiri@gmail.com</p>
					<p>Semarang, Indonesia</p>
					<p>082138793602</p>
					<Link href="./edit_account">
						<button className="px-4 py-2 w-auto bg-[#557EBC] text-white rounded-md md:text-lg lg:text-xl lg:py-3 lg:px-5">
							Update Profile
						</button>
					</Link>
				</div>
				<div className="flex flex-col">
					<h1 className="text-black text-center font-bold my-6 p-0 md:p-12 lg:p-12 text-2xl md:text-4xl lg:text-5xl">
						My Order History
					</h1>
					<div className="mx-8">
						<table className="w-full table-fixed">
							<thead>
								<tr className="text-xs md:text-lg lg:text-lg font-bold text-black border-b-2 border-neutral-400 pb-3">
									<td>ORDER ID</td>
									<td>DATE</td>
									<td>PRICE (IDR)</td>
									<td>ACTION</td>
								</tr>
								<tr className="text-xs md:text-lg lg:text-lg text-black">
									<td>#127DC</td>
									<td>12 June 2022</td>
									<td>299.000</td>
									<td>
										<Link href="../detail_order">
											<button className="p-2 w-auto bg-[#557EBC] text-white rounded-md md:text-lg lg:text-xl lg:py-3 lg:px-5">
												Detail
											</button>
										</Link>
									</td>
									<td>
										<Link href="">
											<button className="p-2 w-auto bg-[#C5344E] text-white rounded-md md:text-lg lg:text-xl lg:py-3 lg:px-5">
												Cancel
											</button>
										</Link>
									</td>
								</tr>
							</thead>
						</table>

						{/* <div className="grid gap-4">
					{datas.map((data) => (
						<HomeAdminCard
							key={data.productid}
							id={data.productid}
							title={data.productname}
							stock={data.stock}
							price={data.price}
						/>
					))}
				</div> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default my_account;
