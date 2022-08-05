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

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("price", price);
    formdata.append("stock", stock);
    formdata.append("image", image);

    var requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formdata,
    };

    fetch(
      "https://rubahmerah.site/admins",
      // "https://virtserver.swaggerhub.com/vaniliacahya/E-Store/1.0.0/admins",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const { message, code } = result;
        alert(message);
        if (code === 200) {
          router.push("/admin/home_admin");
        }
      })
      .catch((error) => {
        alert(error, toString());
      })
      .finally(() => setLoading(false));
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
