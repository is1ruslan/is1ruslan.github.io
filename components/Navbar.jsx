import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="z-50 backdrop-blur-lg px-7 sm:px-12 py-8 fixed top-0 w-full flex border-b border-b-moduleDark items-center justify-between bg-[#11111160]">
      <div className="flex gap-3 items-center">
      <Image
          alt="logo"
          src="/navbar/logoShort.svg"
          width={33}
          height={33}
          className="flex"
        />
        <p className="text-xl hidden md:flex text" style={{ color: '#D2CFC9' }}>OpenLiquidity</p>
        
      </div>
      <div className="flex items-center gap-3 sm:gap-4 max-h-10">
        <a
          // href="https://app.toadswap.org/?input=ether&output=0xd377f28245bc505190c8f34d2bfe5f215754f634"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 text-sm py-3 h-10 hidden sm:flex bg-[#35353580] hover:bg-[#353535] ease-linear duration-100 transition-all text-primary items-center justify-center rounded-2xl"
        >Buy $OpenLi</a>
        <a
          href="https://linktr.ee"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 text-sm h-10 bg-[#35353580] hover:bg-[#353535] ease-linear duration-100 transition-all rounded-2xl flex items-center justify-center"
        >
          <Image
            src="/navbar/linktree.svg"
            alt="linktree"
            width={16}
            height={20}
          />
        </a>
        <a
          // href="https://docs.0xliquidityswap.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 h-10 bg-[#35353580] hover:bg-[#353535] ease-linear duration-100 transition-all text-maintextDark rounded-2xl flex items-center justify-center gap-3"
        >
          <Image
            src="/navbar/gitbook.svg"
            alt="linktree"
            width={24}
            height={17}
          />
          <p className="hidden sm:flex text-sm">Read docs</p>
        </a>
        <button
          href="/"
          className="px-2 h-10 sm:px-4 py-3 text-sm hover:bg-[#f8d99c] ease-linear duration-100 transition-all bg-primary text-backingDark rounded-2xl flex items-center justify-center w-[140px]"
        >
          <p>Launch App</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
