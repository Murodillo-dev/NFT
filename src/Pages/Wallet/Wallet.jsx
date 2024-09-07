import React from 'react'
import { NavLink } from 'react-router-dom'
import coinbase from './images/Coinbase.png'
import metamask from './images/Metamask.png'
import connect from './images/WalletConnect.png'

const Wallet = () => {
    return (
        <div className="w-full h-auto bg-[#2B2B2B] ">

            <div className="create w-full min-h-[690px] h-full flex justify-between flex-wrap max-large:flex-col max-large:items-center">

                <div className="wallet w-[50%] max-large:w-full max-large:h-[400px]"></div>

                <div className="right w-[50%] h-full pl-14 py-[100px] box-border max-other:pl-8 pr-3 max-large:p-0 max-large:flex flex-col items-center max-large:py-6 max-large:text-center max-tablet:w-[100%] max-mobile:px-4">
                    <h1 className="font-[work-sans] text-[51px] text-white font-[600] max-other:text-[40px] max-meduim:text-[36px] max-small:text-[25px]">
                        Connect wallet
                    </h1>
                    <p className="font-[work-sans] mb-5 text-[22px] text-white max-w-[460px] w-full mt-5 font-[400] max-other:text-[19px] max-meduim:text-[16px] max-small:text-[13px    ]">
                        Choose a wallet you want to connect. There are several wallet providers.
                    </p>

                    <a className="max-w-[330px] bg-[#3B3B3B] rounded-[20px] mt-[15px] w-full py-10 input input-bordered flex items-center gap-2">
                       <img src={metamask} alt="" />
                       <span>Metamask</span>
                    </a>

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

        </div>
    )
}

export default Wallet