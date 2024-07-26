import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <div className="w-full h-auto bg-[#2B2B2B] ">

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

                    <button className="font-[work-sans] text-[18px] max-w-[330px] rounded-[20px] mt-[15px] w-full h-[45px] bg-[#A259FF] hover:bg-[#A259FF] active:bg-[#A259FF] text-white">
                        Log In
                    </button>
                    <NavLink to='signup' className="hidden text-center leading-[45px] font-[work-sans] text-[18px] max-w-[330px] rounded-[20px] mt-[15px] w-full h-[45px] bg-[#A259FF] hover:bg-[#A259FF] active:bg-[#A259FF] text-white max-other:block">
                        Sign Up
                    </NavLink>
                </div>

            </div>

            {/* <img src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/files/heroanimationtransparentbck-2.gif" alt="" /> */}

        </div>
    );
};

export default Login;
