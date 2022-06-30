import React from "react";
import Logo from "../../assets/logo.png";
import {
  BiHomeAlt,
  BiGridAlt,
  BiCreditCardAlt,
  BiUser,
  BiCalculator,
} from "react-icons/bi";
import { RiSettings5Line } from "react-icons/ri";

export default function Sidebar() {
  const menu = [
    { name: "Home", icon: <BiHomeAlt /> },
    { name: "Account", icon: <BiGridAlt /> },
    { name: "Cards", icon: <BiCreditCardAlt /> },
    { name: "Contacs", icon: <BiUser /> },
    { name: "Loan Calculator", icon: <BiCalculator /> },
    { name: "Settingss", icon: <RiSettings5Line /> },
  ];

  const schedulePayment = ["Monthly Rent", "Food Payment", "Utility Bills"];

  return (
    <div className="h-screen border-r border-gray-200 w-64 px-9">
      <div className="flex flex-row items-center">
        <img src={Logo} alt="naufal" className="w-9 h-9" />
        <div>Naufal Banking</div>
      </div>
      <div>
        <ul>
          <div className="mb-4">Menu</div>
          {menu.map((val, index) => {
            return (
              <li key={index} className="mb-7 flex flex-row items-center">
                <div className="mr-5">{val.icon}</div>
                <div>{val.name}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div>Scheduled Payments</div>
    </div>
  );
}
