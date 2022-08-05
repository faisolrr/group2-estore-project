import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

import HeaderAdmin from "../../components/HeaderAdmin";
import { HomeAdminCard } from "../../components/Card";

function home_admin() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    fetch(
      // "https://virtserver.swaggerhub.com/vaniliacahya/E-Store/1.0.0/admins/history",
      "https://rubahmerah.site/admins",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const { data } = result;
        if (data) {
          setDatas(data);
        }
        if (result) {
          setDatas(result);
        }
      })
      .catch((error) => alert(error.toSting))
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <div>Please wait...</div>;
  } else {
    return (
      <div className="h-screen w-screen bg-[#eeee]">
        <HeaderAdmin />
        <div className="mt-10 md:mt-14 lg:mt-20 flex space-x-5 justify-center">
          <Link href="./add_product">
            <button className="w-auto bg-[#557EBC] p-2 text-white rounded-md md:text-2xl lg:text-4xl">
              +Add product
            </button>
          </Link>
          <Link href="./history_order">
            <button className="w-auto bg-[#557EBC] p-2 text-white rounded-md md:text-2xl lg:text-4xl">
              +History order
            </button>
          </Link>
        </div>

        <h1 className="text-black text-center my-6 p-0 md:p-12 lg:p-12 text-2xl md:text-4xl lg:text-5xl">
          All Products
        </h1>
        <div className="mx-8">
          <table className="w-full table-fixed border-b-2 border-neutral-400">
            <thead>
              <tr className="text-black text-xs md:text-lg lg:text-lg font-bold">
                <td>PRODUCT ID</td>
                <td>PRODUCT NAME</td>
                <td>STOCK</td>
                <td>PRICE (IDR)</td>
                <td>ACTION</td>
              </tr>
            </thead>
          </table>
          <div className="grid gap-4">
            {datas.map((data) => (
              <HomeAdminCard
                key={data.id}
                id={data.id}
                title={data.name}
                stock={data.stock}
                price={data.price}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default home_admin;
