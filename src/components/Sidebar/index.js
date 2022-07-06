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
    <div className="h-screen border-r border-gray-200 w-64 px-9  space-y-10">
      <div className="flex flex-row items-center pt-8">
        <img src={Logo} alt="naufal" className="w-9 h-9" />
        <div>Naufal Banking</div>
      </div>
      <div className="space-y-14">
        <div>
          <div className="mb-4 text-indigo-600">Menu</div>
          <ul className="space-y-7">
            {menu.map((val, index) => {
              return (
                <li
                  key={index}
                  className="flex flex-row items-center text-gray-400"
                >
                  <div className="mr-5">{val.icon}</div>
                  <div>{val.name}</div>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <div className="mb-4 text-indigo-600">Scheduled Payments</div>
          <div className="space-y-7">
            {schedulePayment.map((val, index) => {
              return (
                <div className="flex items-center text-gray-400">
                  <div className="h-4 w-4 mr-4 border border-indigo-500 rounded-full" />
                  {val}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
