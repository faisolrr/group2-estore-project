import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

import HeaderAdmin from "../../components/HeaderAdmin";
import { HomeAdminCard } from "../../components/Card";

function HomeAdmin() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [idDelete, setIdDelete] = useState([]);

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

    fetch("https://rubahmerah.site/admins", requestOptions)
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

  const handleDelete = async (e) => {
    setLoading(true);
    e.preventDefault();

    var requestOptions = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    fetch(`https://rubahmerah.site/admins/${idDelete}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const { message, code } = result;
        alert(message);
        if (code === 200) {
          location.reload();
        }
      })
      .catch((error) => {
        alert(error, toString());
      })
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <div>Please wait...</div>;
  } else {
    return (
      <div className="pb-10 h-screen w-screen bg-[#eeee]">
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
        <div className="flex justify-center">
          <p>input product id for delete !</p>
        </div>
        <form onSubmit={(e) => handleDelete(e)}>
          <div className="flex justify-center">
            <input
              className="w-20 py-1 rounded-md bg-[#D9D9D9]"
              type="text"
              placeholder="id!"
              onChange={(e) => setIdDelete(e.target.value)}
            />
          </div>
          <div className="my-3 flex justify-center">
            <button
              className="px-2 py-2 bg-[#C5344E] text-white rounded-md text-xs md:text-xl lg:text-2xl"
              type="submit"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default HomeAdmin;
