import React, { useState, useEffect } from "react";
import Link from "next/link";

import Header from "../components/Header";
import { DetailOrderCard } from "../components/Card";

function detail_order() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const body = 1;
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    fetch(
      "https://rubahmerah.site/admins/history",

      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const { data } = result;
        if (data) {
          setDatas(data);
        }
      })
      .catch((error) => alert(error.toString))
      .finally(() => setLoading(false));
  };
  if (loading) {
    return <div>Please wait...</div>;
  } else {
    return (
      <div className="h-screen w-screen bg-[#eeee]">
        <Header />
        <div className="my-10 md:my-14 lg:my-20 flex justify-center">
          <h1 className="text-black text-center text-base font-bold md:text-4xl lg:text-4xl">
            Detail order
          </h1>
        </div>
        <div className="text-black flex flex-row ml-5 md:ml-20 text-xs md:text-lg lg:text-2xl mb-4 space-x-8">
          <div className="font-bold">
            <p>ORDER ID</p>
            <p>DATE</p>
          </div>
          <div>
            <p>{datas.orderid}</p>
            <p>{datas.created_at}</p>
          </div>
        </div>

        <div className="ml-5 md:ml-20 lg:ml-30">
          <table className="w-full table-fixed border-b-2 border-neutral-400">
            <thead>
              <tr className="text-black text-xs md:text-lg lg:text-2xl font-bold">
                <td>ID PRODUCT</td>
                <td>PRODUCT NAME</td>
                <td>QTY</td>
                <td>PAYMENT (IDR)</td>
              </tr>
            </thead>
          </table>
          <div className="grid gap-4">
            {datas[0].map((data) => (
              <DetailOrderCard
                key={data.productid}
                id={data.productid}
                title={data.productname}
                stock={data.qty}
                price={data.total}
              />
            ))}
          </div>
          <DetailOrderCard />
          <div className="text-black flex flex-row justify-end space-x-4 text-xs md:text-lg lg:text-3xl mt-4 mr-10 md:mr-24 lg:mr-48">
            <p className="font-bold">TOTAL (IDR)</p>
            <p>{datas[0].total}</p>
          </div>
        </div>
        <div className="flex flex-row justify-end mt-5 mr-10 md:mr-16">
          <Link href="./admin/history_order">
            <button className="p-2 bg-[#557EBC] text-white rounded-md text-sm md:text-2xl lg:text-4xl">
              Back
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default detail_order;
