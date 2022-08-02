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

    const raw = JSON.stringify({
      name: "Cindy",
      email: "mbacin@gmail.com",
      password: 1234,
      address: "Jln. Baru No.4, Jakarta - Indonesia",
      phone: "08123247689",
    });

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
    <>
      <div>Header</div>
      <div className="gap-5 grid grid-flow-row auto-rows-max grid-cols-5">
        {datas.map((data) => (
          <DashboardCard
            key={data.id}
            title={data.title}
            body={data.body}
            price={data.id}
          />
        ))}
      </div>
    </>
  );
}
