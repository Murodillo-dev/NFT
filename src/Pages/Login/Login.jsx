import React from "react";
import logo from "./images/Storefront.png";

const Login = () => {
    return (
        <div className="w-full h-auto bg-[#2B2B2B] ">
            <div className="flex justify-between items-center bg-[#2B2B2B] flex-wrap px-[50px] py-5">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">
                        <img src={logo} alt="" />
                        <span className="text-white font-[space-mono]">
                            NFT Marketplace
                        </span>
                    </a>
                </div>
                <div className="flex-none">
                    <ul className="flex justify-start items-center gap-3 text-white font-[work-sans] font-[600] text-[16px] ">
                        <li>
                            <a className="px-5 py-3 " href="">
                                Marketplace
                            </a>
                        </li>
                        <li>
                            <a className="px-5 py-3 " href="">
                                Rankings
                            </a>
                        </li>
                        <li>
                            <a className="px-5 py-3 " href="">
                                Connect a wallet
                            </a>
                        </li>
                        <li>
                            <button className="flex gap-3 px-[30px] rounded-[20px] py-5 box-border bg-[#A259FF] hover:bg-[#A259FF] active:bg-[#A259FF]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
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

            <div className="create w-full min-h-[690px] h-full flex justify-between flex-wrap">
                <div className="left w-[50%]"></div>
                <div className="right w-[50%] h-full pl-14 py-[100px] box-border">
                    <h1 className="font-[work-sans] text-[51px] text-white font-[600]">
                        Create account
                    </h1>
                    <p className="font-[work-sans] text-[22px] text-white max-w-[460px] w-full mt-5 font-[400]">
                        Welcome! enter your details and start creating, collecting and selling NFTs.
                    </p>

                    <label className="  max-w-[330px] rounded-[20px] mt-[40px] w-full h-[45px] input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input type="text" className="grow" placeholder="Username" />
                    </label>

                    <label className=" max-w-[330px] rounded-[20px] mt-[15px] w-full h-[45px] input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="email" className="grow" placeholder="Email Address" />
                    </label>

                    <label className=" max-w-[330px] rounded-[20px] mt-[15px] w-full h-[45px] input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>
                        <input type="password" className="grow" placeholder="Password" />
                    </label>

                    <label className=" max-w-[330px] rounded-[20px] mt-[15px] w-full h-[45px] input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>
                        <input type="password" className="grow" placeholder="Confirm Password" />
                    </label>

                    <button className="font-[work-sans] text-[16px] max-w-[330px] rounded-[20px] mt-[15px] w-full h-[45px] bg-[#A259FF] hover:bg-[#A259FF] active:bg-[#A259FF] text-white">Create account</button>

                </div>
            </div>

            <div>
                <footer className="footer bg-[#3B3B3B] text-base-content px-[115px] py-10">
                    <nav>
                        <a className="flex items-center gap-3 text-xl">
                            <img src={logo} alt="" />
                            <span className="text-white font-[space-mono]">
                                NFT Marketplace
                            </span>
                        </a>
                        <a className="link link-hover">NFT marketplace UI created <br /> with Anima for Figma.</a>
                        <a className="link link-hover">Join our community</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <form>
                        <h6 className="footer-title">Newsletter</h6>
                        <fieldset className="form-control w-80">
                            <label className="label">
                                <span className="label-text">Enter your email address</span>
                            </label>
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="username@site.com"
                                    className="input input-bordered join-item" />
                                <button className="btn btn-primary join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </footer>
            </div>
        </div>
    );
};

export default Login;
