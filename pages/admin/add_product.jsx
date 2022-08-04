import Link from "next/link";
import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

import Header from "../../components/Header";

function add_product() {
  // const [productid, setProductid] = useState("");
  const [productname, setProductname] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [foto, setFoto] = useState("");

  const [datas, setDatas] = useState([]);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [selectImage, setSelectImage] = useState(undefined);
  const [inputImge, setInputImage] = useState(false);

  const handleImg = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectImage(e.target.files[0]);
      setInputImage(true);
    }
  };

  const removeImage = () => {
    setInputImage(false);
  };

  // const handleSubmit = async (e) => {
  //   setLoading(true);
  //   e.preventDefault();
  //   const formData = new FormData();

  //   var requestOptions = {
  //     method: "POST",
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     },
  //     body: formData,
  //   };

  //   fetch("https://rubahmerah.site/admins", requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(result);
  //       const { message } = result;
  //       alert(message);
  //     })
  //     .catch((error) => console.log("error", error))
  //     .finally(() => fetchData());
  // };

  return (
    <>
      {!inputImge ? (
        <div className="pb-10 min-h-screen bg-[#eeee]">
          <Header />

          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="my-10">
              <label className="flex flex-col h-32 w-full mt-3 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300 md:h-48 lg:h-56">
                <div className="flex flex-col items-center justify-center pt-7">
                  <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                    Drag Image
                  </p>
                </div>
                <input onChange={handleImg} type="file" className="opacity-0" />
              </label>
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
              <div className="flex justify-center mb-5">
                <input
                  className="p-6 md:p-8 md:px-20 rounded-md bg-[#D9D9D9]"
                  type="text"
                  placeholder="FOTO"
                  onChange={(e) => setFoto(e.target.value)}
                />
              </div>
            </div>
          </form>

          <div className="my-3 flex justify-center">
            <button
              className="px-10 py-3 bg-[#557EBC] text-white rounded-md text-sm md:text-2xl lg:text-4xl"
              onClick={() => handleSubmit()}
            >
              Add
            </button>
          </div>
          <div className="flex justify-center">
            <Link href="./home_admin">
              <button className="px-10 py-3 bg-[#557EBC] text-white rounded-md text-sm md:text-2xl lg:text-4xl">
                Back
              </button>
            </Link>
          </div>
        </div>
      ) : (
        // {/* ......................................... */}
        <div className="pb-10 min-h-screen bg-[#eeee]">
          <Header />

          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="flex items-center justify-center pb-10 mt-2 md:mt-8">
              <label className="flex flex-col h-32">
                <div className="flex flex-col items-center justify-center ">
                  <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                    <img
                      className="h-32 md:h-48 lg:h-56"
                      src={URL.createObjectURL(selectImage)}
                    />
                  </p>
                </div>
                <button
                  onClick={() => removeImage()}
                  className="p-10 bg-red-600 mt-2 mx-8 rounded-lg py-1 text-white"
                >
                  Remove
                </button>
              </label>
            </div>
            <div className="p-20">
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
              <div className="flex justify-center mb-5">
                <input
                  className="p-6 md:p-8 md:px-20 rounded-md bg-[#D9D9D9]"
                  type="text"
                  placeholder="FOTO"
                  onChange={(e) => setFoto(e.target.value)}
                />
              </div>
            </div>
          </form>

          <div className="my-3 flex justify-center">
            <button
              className="px-10 py-3 bg-[#557EBC] text-white rounded-md text-sm md:text-2xl lg:text-4xl"
              onClick={() => handleSubmit()}
            >
              Add
            </button>
          </div>
          <div className="flex justify-center">
            <Link href="./home_admin">
              <button className="px-10 py-3 bg-[#557EBC] text-white rounded-md text-sm md:text-2xl lg:text-4xl">
                Back
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default add_product;
