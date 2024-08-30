import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import logo from "../Icons/Storefront.png";
import discord from "../Icons/discord.png";
import instagram from "../Icons/instagram.png";
import twitter from "../Icons/twitter.png";
import youtube from "../Icons/youtube.png";

const MainLayout = () => {
    return (
        <div>

            <header className='sticky top-0 z-10'>

                <div className="flex justify-between items-center  bg-[#2B2B2B] flex-wrap px-[40px] py-5 max-ipad:px-5 max-other:justify-between max-mobile:p-2">

                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl max-ipad:p-0 max-meduim:text-[16px] max-mobile:text-[14px]">
                            <img src={logo} alt="" className="max-meduim:w-6 max-mobile:w-5" />
                            <span className="text-white font-[space-mono]">
                                NFT Marketplace
                            </span>
                        </a>
                    </div>

                    <div className="flex-none max-other:hidden">
                        <ul className="flex justify-start items-center gap-3 text-white font-[work-sans] font-[600] text-[14px] max-ipad:gap-0 ">
                            <li>
                                <NavLink to='home' className="px-5 py-3 max-ipad:px-3 max-ipad:py-3 " href="">
                                    Marketplace
                                </NavLink>
                            </li>
                            <li>
                                <a className="px-5 py-3 max-ipad:px-3 max-ipad:py-3 " href="">
                                    Rankings
                                </a>
                            </li>
                            <li>
                                <NavLink to='wallet' className="px-5 py-3 max-ipad:px-3 max-ipad:py-3 " href="">
                                    Connect a wallet
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='signup' className="flex gap-3 text-[14px] px-[30px] rounded-[20px] py-5 box-border bg-[#A259FF] hover:bg-[#A259FF] active:bg-[#A259FF]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 11c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                                        />
                                    </svg>
                                    Sign Up
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="drawer-end hidden max-other:block">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

                        <div className="drawer-content">
                            <label htmlFor="my-drawer-4" className="drawer-button">
                                <i className="fa-solid fa-bars text-white text-[25px] max-meduim:text-[20px]"></i>
                            </label>
                        </div>

                        <div className="drawer-side pt-4 ">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu rounded-l-3xl bg-[#2b2b2bf9] text-white text-base-content min-h-full w-80 p-4 text-black font-[work-sans] font-[600] text-[14px] max-ipad:gap-0 max-meduim:w-[75%] ">
                                <li>
                                    <a className="px-5 py-3 max-ipad:px-3 py-3 " href="">
                                        Marketplace
                                    </a>
                                </li>
                                <li>
                                    <a className="px-5 py-3 max-ipad:px-3 py-3 " href="">
                                        Rankings
                                    </a>
                                </li>
                                <li>
                                    <a className="px-5 py-3 max-ipad:px-3 py-3 " href="">
                                        Connect a wallet
                                    </a>
                                </li>
                                <li>
                                    <NavLink to='signup' className="flex gap-3 text-[14px] px-[30px] rounded-[20px] py-5 box-border bg-[#A259FF] hover:bg-[#A259FF] active:bg-[#A259FF]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 11c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                                            />
                                        </svg>
                                        Sign Up
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </header>

            <main>
                <Outlet />
            </main>

            <footer className="footer bg-[#3B3B3B]  text-base-content px-[115px] py-10 max-ipad:px-5 flex justify-between max-other:flex-col max-meduim:">
                <nav>
                    <a className="flex items-center gap-3 text-[20px]">
                        <img src={logo} alt="" />
                        <span className="text-white font-semibold font-[space-mono]">
                            NFT Marketplace
                        </span>
                    </a>
                    <a className="link link-hover mt-7">
                        NFT marketplace UI created <br /> with Anima for Figma.
                    </a>
                    <a className="link link-hover mt-5">Join our community</a>
                    <nav className="flex gap-[10px] mt-4">
                        <a className="link link-hover">
                            <img src={discord} alt="" />
                        </a>
                        <a className="link link-hover">
                            <img src={instagram} alt="" />
                        </a>
                        <a className="link link-hover">
                            <img src={twitter} alt="" />
                        </a>
                        <a className="link link-hover">
                            <img src={youtube} alt="" />
                        </a>
                    </nav>
                </nav>

                <nav className="mt-2">
                    <a className="text-white font-[space-mono] font-semibold text-[20px]">
                        Explore
                    </a>
                    <a className="link link-hover mt-5">Marketplace</a>
                    <a className="link link-hover mt-5">Rankings</a>
                    <a className="link link-hover mt-5">Connect a wallet</a>
                </nav>

                <form className="mt-2">
                    <a className="text-white font-[space-mono] font-semibold text-[20px]">
                        Join our weekly digest
                    </a>
                    <fieldset className="form-control max-w-80 w-full">
                        <a className="label-text text-[#CCCCCC] text-[16px] mt-6 mb-5">
                            Get exclusive promotions & updates straight to your inbox.
                        </a>

                        <div className="join">
                            <input
                                type="text"
                                placeholder="Enter your email here"
                                className="input input-bordered join-item rounded-[15px] h-[60px] max-meduim:max-w-[250px] w-full"
                            />
                            <div className="join">
                                <button className="btn h-[60px] rounded-[20px] bg-[#A259FF] hover:bg-[#A259FF] active:bg-[#A259FF] join-item font-[work-sans] text-white px-[50px] py-5 max-meduim:max-w-[50px] w-full">Subscribe</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </footer>

        </div>
    )
}

export default MainLayout