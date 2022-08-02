import DashboardCard from "../components/Card";
import { useState, useEffect } from "react";

export default function Home() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

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

    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result) {
          setDatas(result);
        }
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <div className="bg-[#eeee]">
      <div>Header</div>
      <div className="h-96 w-full bg-hero"></div>
      <h1 className="text-center mt-6 p-0 md:p-12 lg:p-12 text-4xl lg:text-6xl md:text-6xl">
        All Product
      </h1>
      <div className="m-10 gap-12 grid grid-flow-row auto-rows-max grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {datas.map((data) => (
          <DashboardCard
            key={data.id}
            title={data.title}
            body={data.body}
            price={data.id}
          />
        ))}
      </div>
    </div>
  );
}
