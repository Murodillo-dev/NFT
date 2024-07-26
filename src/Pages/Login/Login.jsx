import React from "react";
import logo from "./images/Storefront.png";
import discord from "../../Icons/discord.png";
import instagram from "../../Icons/instagram.png";
import twitter from "../../Icons/twitter.png";
import youtube from "../../Icons/youtube.png";

const Login = () => {
    return (
        <div className="w-full h-auto bg-[#2B2B2B] ">

            <div className="flex justify-between items-center bg-[#2B2B2B] flex-wrap px-[40px] py-5 max-ipad:px-5 max-other:justify-between max-mobile:p-2">

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
                            <button className="flex gap-3 text-[14px] px-[30px] rounded-[20px] py-5 box-border bg-[#A259FF] hover:bg-[#A259FF] active:bg-[#A259FF]">
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
                            </button>
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
                                <button className="flex gap-3 text-[14px] px-[30px] rounded-[20px] py-5 box-border bg-[#A259FF] hover:bg-[#A259FF] active:bg-[#A259FF]">
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
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="create w-full min-h-[690px] h-full flex justify-between flex-wrap max-large:flex-col max-large:items-center">

                <div className="left w-[50%] max-large:w-full max-large:h-[400px]"></div>

                <div className="right w-[50%] h-full pl-14 py-[100px] box-border max-other:pl-8 pr-3 max-large:p-0 max-large:flex flex-col items-center max-large:py-6 max-large:text-center max-tablet:w-[100%] max-mobile:px-4">
                    <h1 className="font-[work-sans] text-[51px] text-white font-[600] max-other:text-[40px] max-meduim:text-[36px] max-small:text-[25px]">
                        Create account
                    </h1>
                    <p className="font-[work-sans] text-[22px] text-white max-w-[460px] w-full mt-5 font-[400] max-other:text-[19px] max-meduim:text-[16px] max-small:text-[13px    ]">
                        Welcome! enter your details and start creating, collecting and
                        selling NFTs.
                    </p>

                    <label className=" max-w-[330px] rounded-[20px] mt-[40px] w-full h-[45px] input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70"
                        >
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input type="text" className="grow" placeholder="Username" />
                    </label>

                    <label className=" max-w-[330px] rounded-[20px] mt-[15px] w-full h-[45px] input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70"
                        >
                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="email" className="grow" placeholder="Email Address" />
                    </label>

                    <label className=" max-w-[330px] rounded-[20px] mt-[15px] w-full h-[45px] input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70"
                        >
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <input type="password" className="grow" placeholder="Password" />
                    </label>

                    <label className=" max-w-[330px] rounded-[20px] mt-[15px] w-full h-[45px] input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70"
                        >
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <input
                            type="password"
                            className="grow"
                            placeholder="Confirm Password"
                        />
                    </label>

                    <button className="font-[work-sans] text-[16px] max-w-[330px] rounded-[20px] mt-[15px] w-full h-[45px] bg-[#A259FF] hover:bg-[#A259FF] active:bg-[#A259FF] text-white">
                        Create account
                    </button>
                </div>

            </div>

            <div>
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

        </div>
    );
};

export default Login;
