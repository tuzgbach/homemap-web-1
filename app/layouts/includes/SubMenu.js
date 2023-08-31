import React from "react";
import Link from "next/link";
import "./SubMenu.css";

export default function SubMenu() {
  const menuItems = [
    { id: 1, name: "Trang chủ", path: "/" },
    { id: 2, name: "Chiến dịch vừa ra mắt", path: "/" },
    { id: 3, name: "Chiến dịch mùi hương", path: "/" },
  ];

  return (
    <div id="SubMenu" className="border-b">
      <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
        <div className="flex items-center space-x-4">
          <div className="menu-icon">
            {/* Thêm biểu tượng hoặc biểu tượng menu ở đây */}
            <i className="fas fa-bars"></i>
          </div>
          <ul
            id="TopMenuLeft"
            className="flex items-center text-[13px] text-[#333333] px-2 h-8">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`px-3 hover:underline cursor-pointer transition duration-300 ease-in-out transform hover:scale-105`}>
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
