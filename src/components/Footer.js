// src/components/Footer.js
"use client";

import Link from "next/link";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-gray-300 py-4">
      <div className="flex justify-between items-center px-28">
        {/* 좌측: 저작권 문구 */}
        <div className="text-sm">
          © 2025 Janghyun Roh. All rights reserved.
        </div>
        {/* 우측: 연락 수단 이모티콘 */}
        <div className="flex space-x-4">
          <Link
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-6 h-6 hover:text-white transition" />
          </Link>
          <Link
            href="https://github.com/janghyunroh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6 hover:text-white transition" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/%EC%9E%A5%ED%98%84-%EB%85%B8-98505029a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-6 h-6 hover:text-white transition" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
