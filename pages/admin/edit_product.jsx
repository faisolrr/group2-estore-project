import React, { useState, useEffect } from "react";
import Link from "next/link";

import Header from "../../components/Header";

function add_product() {
  const [productname, setProductname] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  return (
    <div className="pb-10 min-h-screen bg-[#eeee]">
      <Header />
      <div className="m-10 flex justify-center">
        <img
          src="https://images.pexels.com/photos/8387134/pexels-photo-8387134.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="no image"
        />
      </div>
      <div>
        <div className="flex justify-center mb-5">
          <input
            className="p-6 md:p-8 md:px-20 rounded-md bg-[#D9D9D9]"
            type="text"
            placeholder="PRODUCT NAME"
            onChange={(e) => setProductname(e.target.value)}
          />
        </div>
        <div className="flex justify-center mb-5">
          <input
            className="p-6 md:p-8 md:px-20 rounded-md bg-[#D9D9D9]"
            type="text"
            placeholder="PRICE (IDR)"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="flex justify-center mb-5">
          <input
            className="p-6 md:p-8 md:px-20 rounded-md bg-[#D9D9D9]"
            type="text"
            placeholder="STOCK"
            onChange={(e) => setStock(e.target.value)}
          />
        </div>
      </div>

      <div className="my-3 flex justify-center">
        <Link href="#">
          <button className="px-10 py-3 bg-[#557EBC] text-white rounded-md text-sm md:text-2xl lg:text-4xl">
            Update
          </button>
        </Link>
      </div>
      <div className="flex justify-center">
        <Link href="./home_admin">
          <button className="px-10 py-3 bg-[#557EBC] text-white rounded-md text-sm md:text-2xl lg:text-4xl">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default add_product;
