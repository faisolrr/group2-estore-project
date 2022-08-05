import { useRouter } from "next/router";
import React, { useContext } from "react";
import { ButtonSmall } from "./Button";
import { TokenContext } from "../utils/context";

function Header() {
  const router = useRouter();
  const { token, setToken } = useContext(TokenContext);
  const handleLogout = () => {
    setToken("0");
    localStorage.removeItem("token");
    router.push("/login");
    alert("You have been logged out");
  };
  return (
    <div className="h-18 bg-white sticky top-0 flex justify-between">
      <p className="text-neutral-700 font-bold p-5 text-xl">E-STORE</p>
      <div className="p-5">
        <ButtonSmall label="Logout" onClick={() => handleLogout()} />
      </div>
    </div>
  );
}

export default Header;
