import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import Link from "next/link";

function DashboardCard(props) {
  return (
    <div className="p-0 flex flex-col justify-between">
      <div>
        <img
          src="https://images.pexels.com/photos/8387134/pexels-photo-8387134.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="noimage"
          height="750"
        />
        <p className="text-black border-2 border-neutral-500 p-3 text-center ">
          {props.title}
        </p>
      </div>
      <div>
        <p className="p-3 text-center text-white bg-[#524f4f]">
          IDR {props.price}
        </p>
        <Link href="./login">
          <button className="mt-3 w-full p-3 text-white bg-[#557EBC]">
            Buy
          </button>
        </Link>
      </div>
    </div>
  );
}

export default DashboardCard;
