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
    // const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");

    // const raw = JSON.stringify({
    //   name: "Cindy",
    //   email: "mbacin@gmail.com",
    //   password: 1234,
    //   address: "Jln. Baru No.4, Jakarta - Indonesia",
    //   phone: "08123247689",
    // });

    const requestOptions = {
      method: "GET",
      //   headers: myHeaders,
      //   body: raw,
      //   redirect: "follow",
    };

    fetch(
      "https://virtserver.swaggerhub.com/vaniliacahya/E-Store/1.0.0/orders/idorder",
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
      <div className="h-screen w-screen bg-[#eeee]">
        <Header />
        <div className="my-10 md:my-14 lg:my-20 flex space-x-5 justify-center">
          <h1 className="text-black text-center text-base font-bold md:text-4xl lg:text-4xl">
            Detail order
          </h1>
          <Link href="./admin/history_order">
            <button className="p-1 bg-[#557EBC] text-white rounded-md text-sm md:text-2xl lg:text-4xl">
              Back
            </button>
          </Link>
        </div>
        <div className="text-black flex flex-row ml-5 md:ml-20 text-xs md:text-lg lg:text-2xl mb-4 space-x-8">
          <div className="font-bold">
            <p>ORDER ID</p>
            <p>DATE</p>
          </div>
          <div>
            <p>#127DC</p>
            <p>12 June 2022</p>
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
          <DetailOrderCard />
          <div className="flex flex-row justify-end space-x-4 text-xs md:text-lg lg:text-3xl mt-4 mr-10 md:mr-24 lg:mr-48">
            <p className="font-bold">TOTAL</p>
            <p>1200000</p>
          </div>
        </div>
      </div>
    );
  }
}

export default detail_order;
