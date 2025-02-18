// src/components/Navbar.js
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaBriefcase, FaFileAlt } from "react-icons/fa";
import Clock from "./Clock";

export default function Navbar() {
  const pathname = usePathname();
  const navItems = [
    { name: "Home", path: "/", icon: <FaHome className="mr-2" /> },
    { name: "Portfolio", path: "/portfolio", icon: <FaBriefcase className="mr-2" /> },
    { name: "Posts", path: "/posts", icon: <FaFileAlt className="mr-2" /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-4 py-3">
        {/* 좌측: 지역 텍스트 */}
        <div className="text-gray-700 dark:text-gray-300 font-medium">
          Seoul/Korea
        </div>
        {/* 중앙: 메뉴 컨테이너 (둥근 직사각형) */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow px-6 py-3">
          <ul className="flex space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li key={item.path} className="relative group">
                  <Link
                    href={item.path}
                    className={`relative z-10 flex items-center px-3 py-1 transition-colors duration-300 ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                  {/* 배경 효과: active 또는 hover 시 부드럽게 나타남 */}
                  <span
                    className={`absolute inset-0 bg-blue-500 rounded-md transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    } group-hover:opacity-100`}
                  ></span>
                </li>
              );
            })}
          </ul>
        </div>
        {/* 우측: 실시간 시계 */}
        <div className="text-gray-700 dark:text-gray-300 font-medium">
          <Clock />
        </div>
      </div>
    </nav>
  );
}
