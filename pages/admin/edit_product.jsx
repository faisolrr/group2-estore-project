import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

import HeaderAdmin from "../../components/HeaderAdmin";
import CustomInput from "../../components/CustomInput";

function add_product() {
  const [name, setName] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [objSubmit, setObjSubmit] = useState("");

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    for (const key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }
    var requestOptions = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData,
    };

    fetch("https://rubahmerah.site/admins", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const { message } = result;
        alert(message);
        setObjSubmit({});
      })
      .catch((error) => console.log("error", error))
      .finally(() => fetchData());
  };

  const handleChange = (value, key) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
  };

  return (
    <>
      <div className="pb-10 min-h-screen bg-[#eeee]">
        <HeaderAdmin />

        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="flex justify-center my-10">
            <CustomInput
              id="input-file"
              type="file"
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />
          </div>
          <div>
            <div className="flex justify-center mb-5">
              <input
                className="p-6 md:p-8 md:px-20 rounded-md bg-[#D9D9D9]"
                type="text"
                placeholder="PRODUCT NAME"
                onChange={(e) => setName(e.target.value)}
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
            <div className="flex justify-center mb-5">
              <input
                className="p-6 md:p-8 md:px-20 rounded-md bg-[#D9D9D9]"
                type="text"
                placeholder="PRICE (IDR)"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="my-3 flex justify-center">
              <button
                className="px-10 py-3 bg-[#557EBC] text-white rounded-md text-sm md:text-2xl lg:text-4xl"
                type="submit"
              >
                UPDATE
              </button>
            </div>
          </div>
        </form>

        <div className="flex justify-center">
          <Link href="./home_admin">
            <button className="px-10 py-3 bg-[#557EBC] text-white rounded-md text-sm md:text-2xl lg:text-4xl">
              Back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default add_product;
