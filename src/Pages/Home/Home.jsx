import React, { useState } from 'react'
import { trending } from './Data'

const Home = () => {
    const [data, setData] = useState(trending)
    return (
        <div className='bg-[#2B2B2B] '>
            <div className='py-20 px-[115px] flex justify-between'>

                <div className="max-w-[500px] w-[40% font-[work-sans]">
                    <h1 className='text-white text-[67px] font-semibold leading-[70px] capitalize'>
                        Discover digital art & Collect NFTs
                    </h1>
                    <p className='font-[work-sans] text-[22px] text-white leading-[35px] mt-5'>
                        NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
                    </p>
                    <button className='py-5 px-[50px] bg-[#A259FF] rounded-[20px] text-white text-[16px] font-[work-sans] font-semibold mt-7 flex justify-center items-center gap-3'>
                        <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2l0 82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9l0-107.2c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" /></svg>
                        Get Started
                    </button>

                    <div className="max-w-[510px] w-full flex justify-between mt-[30px] bg-transparent">
                        <div className="stat place-items-left p-0">
                            <div className="stat-value text-[28px] text-white font-semibold">240K + </div>
                            <div className="stat-desc text-[24px] font-[work-sans] text-white leading-10">Total Sale</div>
                        </div>

                        <div className="stat place-items-left p-0">
                            <div className="stat-value text-[28px] text-white font-semibold">100K +</div>
                            <div className="stat-desc text-[24px] font-[work-sans] text-white leading-10">Auctions</div>
                        </div>

                        <div className="stat place-items-left p-0">
                            <div className="stat-value text-[28px] text-white font-semibold">200K +</div>
                            <div className="stat-desc text-[24px] font-[work-sans] text-white leading-10">Artists</div>
                        </div>
                    </div>
                </div>

                <div className="w-[45%]">
                    <img src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/files/heroanimationtransparentbck-2.gif" alt="" />
                </div>

            </div>

            <div className='py-20 px-[115px]'>
                <h1 className='text-[38px] text-white font-[work-sans] font-semibold'>Trending Collection</h1>
                <h3 className='text-[22px] text-[#FFFFFF] font-[work-sans]'>Checkout our weekly updated trending collection.</h3>

                <div className="w-full flex justify-between flex-wrap gap-7 mt-[60px]">
                    {
                        data.map(value => {
                            return (
                                <div className=' w-[30%]'>
                                    <img className='w-full hover:scale-95 ease-in-out duration-200' src={value.mainImg} alt="" />
                                    <div className='flex justify-between mt-4'>
                                        <div className='w-[30%] rounded-[20px] hover:scale-95 ease-in-out duration-200' style={{ background: `url(${value.secondImg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover' }}></div>
                                        <div className='w-[30%] rounded-[20px] hover:scale-95 ease-in-out duration-200' style={{ background: `url(${value.thirdImg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover' }}></div>
                                        <div className='w-[30%] h-[100px] hover:scale-95 ease-in-out duration-200 bg-[#A259FF] flex justify-center items-center text-[22px] text-white font-[work-sans] font-semibold rounded-[20px] '><h1>{value.statistic}+</h1></div>
                                    </div>
                                    <h2 className='text-white text-[22px] mt-[15px] font-[work-sans] font-semibold'>
                                        {value.title}
                                    </h2>
                                    <div className='flex mt-3'>
                                        <img className='w-6 h-6' src={value.titleImg} alt="" />
                                        <h3 className='text-[16px] text-white ml-[10px]'>{value.titleImgName}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home