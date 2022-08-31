import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

import HeaderAdmin from "../../components/HeaderAdmin";
import { AdminHO } from "../../components/Card";

function HistoryOrder() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const requestOptions = {
      method: "GET",
    };

    fetch("https://rubahmerah.site/admins/history", requestOptions)
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
        <HeaderAdmin />
        <div className="my-10 md:my-14 lg:my-20 flex space-x-5 justify-center">
          <h1 className="text-black text-center text-base font-bold md:text-4xl lg:text-4xl">
            All Users Order History
          </h1>
          <Link href="./home_admin">
            <button className="p-1 bg-[#557EBC] text-white rounded-md text-sm md:text-2xl lg:text-4xl">
              Back
            </button>
          </Link>
        </div>

        <div className="ml-5 md:ml-20 lg:ml-30">
          <table className="w-full table-fixed border-b-2 border-neutral-400">
            <thead>
              <tr className="text-black text-xs md:text-lg lg:text-2xl font-bold">
                <td>ORDER ID</td>
                <td>DATE</td>
                <td>TOTAL (IDR)</td>
                <td>ACTION</td>
              </tr>
            </thead>
          </table>
          <div className="grid gap-4">
            {datas.map((data) => (
              <AdminHO
                key={data.orderid}
                id={data.orderid}
                date={data.created_at}
                total={data.total}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default HistoryOrder;
