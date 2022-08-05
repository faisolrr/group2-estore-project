import { DashboardCard } from "../components/Card";
import { useState, useEffect } from "react";

import { ButtonSmall } from "../components/Button";
import Link from "next/link";

export default function Home() {
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
        if (result) {
          const { data } = result;
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
      <div className="bg-[#eeee]">
        <Link href="/login">
          <div className="h-18 bg-white sticky top-0 flex justify-between">
            <p className="text-neutral-700 font-bold p-5 text-xl">E-STORE</p>
            <div className="p-5">
              <ButtonSmall label="Login" />
            </div>
          </div>
        </Link>
        <div className="md:h-60 lg:h-96 w-full bg-hero"></div>
        <h1 className="text-black text-center mt-6 p-0 md:p-12 lg:p-12 text-4xl lg:text-6xl md:text-6xl">
          All Products
        </h1>
        <div className="m-10 gap-12 grid grid-flow-row auto-rows-max grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {datas.map((data) => (
            <DashboardCard
              key={data.id}
              image={data.image}
              title={data.name}
              price={data.price}
            />
          ))}
        </div>
      </div>
    );
  }
}
