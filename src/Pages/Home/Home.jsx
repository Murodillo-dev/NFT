import React, { useState } from 'react'
import { trending, creators, categories, discover, icons } from './Data'
import astranout from './Images/astranout.png'

const Home = () => {
    const [data, setData] = useState(trending)
    const [creator, setCreator] = useState(creators)
    const [categorie, setCategorie] = useState(categories)
    const [discovers, setDiscovers] = useState(discover)
    const [icon, setIcon] = useState(icons)
    const [hours, setHours] = useState(59)
    const [minutes, setMinutes] = useState(59)
    const [seconds, setSeconds] = useState(59)


    return (
        <div className='bg-[#2B2B2B] '>

            <div className='py-20 px-[115px] flex justify-between max-desktop:px-20 max-laptop:px-10 max-ipad:py-10 max-large:flex-col items-center max-meduim:px-5'>

                <div className=" w-[50%] font-[work-sans] max-ipad:w-[100%] max-large:text-center">
                    <h1 className='text-white text-[67px] font-semibold leading-[70px] capitalize max-laptop:text-[50px] max-ipad:text-[30px] max-ipad:leading-[40px]'>
                        Discover digital art & Collect NFTs
                    </h1>
                    <p className='font-[work-sans] text-[22px] text-white leading-[35px] mt-5 max-ipad:text-[16px] max-ipad:leading-[25px] max-ipad:mb-10'>
                        NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
                    </p>
                    <button className='py-5 px-[50px] bg-[#A259FF] rounded-[20px] text-white text-[16px] font-[work-sans] font-semibold mt-7 flex justify-center items-center gap-3 max-large:hidden'>
                        <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2l0 82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9l0-107.2c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" /></svg>
                        Get Started
                    </button>

                    <div className="max-w-[510px] w-full flex justify-between mt-[30px] bg-transparent max-large:hidden">
                        <div className="stat place-items-left p-0">
                            <div className="stat-value text-[28px] text-white font-semibold max-ipad:text-[22px] ">240K + </div>
                            <div className="stat-desc text-[24px] font-[work-sans] text-white leading-10 max-ipad:text-[18px]">Total Sale</div>
                        </div>

                        <div className="stat place-items-left p-0">
                            <div className="stat-value text-[28px] text-white font-semibold max-ipad:text-[22px]">100K +</div>
                            <div className="stat-desc text-[24px] font-[work-sans] text-white leading-10 max-ipad:text-[18px]">Auctions</div>
                        </div>

                        <div className="stat place-items-left p-0">
                            <div className="stat-value text-[28px] text-white font-semibold max-ipad:text-[22px]">200K +</div>
                            <div className="stat-desc text-[24px] font-[work-sans] text-white leading-10 max-ipad:text-[18px]">Artists</div>
                        </div>
                    </div>

                </div>

                <div className="w-[45%] max-ipad:w-[100%]">
                    <img className='w-[265%]' src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/files/heroanimationtransparentbck-2.gif" alt="" />
                </div>

                <button className='py-5 px-[50px] w-[50%] hidden bg-[#A259FF] rounded-[20px] text-white text-[16px] font-[work-sans] font-semibold mt-7  gap-3 max-large:block max-large:flex justify-center items-center max-meduim:w-[100%]'>
                    <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2l0 82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9l0-107.2c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" /></svg>
                    Get Started
                </button>

                <div className="w-full hidden mt-[30px] bg-transparent max-large:block">
                    <div className='flex justify-center'>
                        <div className="stat place-items-left p-0 text-center">
                            <div className="stat-value text-[28px] text-white font-semibold max-ipad:text-[22px] max-large:text-[28px] max-meduim:text-[22px]">240K + </div>
                            <div className="stat-desc text-[24px] font-[work-sans] text-white leading-10 max-ipad:text-[18px] max-large:text-[20px] max-meduim:text-[16px]">Total Sale</div>
                        </div>

                        <div className="stat place-items-left p-0 text-center">
                            <div className="stat-value text-[28px] text-white font-semibold max-ipad:text-[22px] max-large:text-[28px] max-meduim:text-[22px]">100K +</div>
                            <div className="stat-desc text-[24px] font-[work-sans] text-white leading-10 max-ipad:text-[18px] max-large:text-[20px] max-meduim:text-[16px]">Auctions</div>
                        </div>

                        <div className="stat place-items-left p-0 text-center">
                            <div className="stat-value text-[28px] text-white font-semibold max-ipad:text-[22px] max-large:text-[28px] max-meduim:text-[22px]">200K +</div>
                            <div className="stat-desc text-[24px] font-[work-sans] text-white leading-10 max-ipad:text-[18px] max-large:text-[20px] max-meduim:text-[16px]">Artists</div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='py-20 px-[115px] max-desktop:px-20 max-laptop:px-10 max-ipad:py-10 max-mobile:px-5'>

                <h1 className='text-[38px] text-white font-[work-sans] font-semibold max-tablet:text-[30px] max-meduim:text-center'>Trending Collection</h1>
                <h3 className='text-[22px] text-[#FFFFFF] font-[work-sans] max-tablet:text-[16px] max-meduim:text-center'>Checkout our weekly updated trending collection.</h3>

                <div className="w-full flex justify-between flex-wrap gap-7 mt-[60px] max-other:flex-col items-center">
                    {
                        data.map(value => {
                            return (
                                <div className=' w-[30%] max-other:w-[65%] max-tablet:w-[85%] max-mobile:w-[100%]'>
                                    <img className='w-full hover:scale-95 ease-linear duration-200' src={value.mainImg} alt="" />
                                    <div className='flex justify-between mt-4'>
                                        <div className='w-[30%] rounded-[20px] hover:scale-95 ease-linear duration-200 max-other:h-[150px] max-meduim:h-[100px]' style={{ background: `url(${value.secondImg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover' }}></div>
                                        <div className='w-[30%] rounded-[20px] hover:scale-95 ease-linear duration-200 max-other:h-[150px] max-meduim:h-[100px]' style={{ background: `url(${value.thirdImg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover' }}></div>
                                        <div className='w-[30%] h-[100px] hover:scale-95 ease-linear duration-200 bg-[#A259FF] flex justify-center items-center text-[22px] text-white font-[work-sans] font-semibold rounded-[20px] max-other:h-[150px] max-meduim:h-[100px] '><h1>{value.statistic}+</h1></div>
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

            <div className='py-20 px-[115px] font-[work-sans] text-white max-desktop:px-20 max-laptop:px-10 max-ipad:py-10 max-mobile:px-5'>

                <h1 className='text-[38px] font-semibold max-meduim:text-center max-meduim:text-[30px]'>Top creators</h1>

                <div className='flex justify-between items-end mt-[-30px] max-other:flex-wrap max-other:mt-5'>

                    <h2 className='text-[22px] font-normal max-ipad:max-w-[500px] max-other:max-w-[600px] max-meduim:text-center max-meduim:w-full max-meduim:text-[16px]'>Checkout Top Rated Creators on the NFT Marketplace</h2>

                    <button className='py-5 px-[50px]  border-2 border-[#A259FF] rounded-[20px] text-white text-[16px] font-[work-sans] font-semibold mt-7 flex justify-center items-center gap-3 hover:scale-95 ease-linear duration-200 max-tablet:hidden'>
                        <svg className='w-5 h-5 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2l0 82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9l0-107.2c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" /></svg>
                        View Rankings
                    </button>

                </div>

                <div className='flex justify-between flex-wrap mt-[45px] max-tablet:justify-center'>
                    {
                        creator.map(value => {
                            return (
                                <div className='text-white font-[work-sans] w-[23%] my-[15px] h-auto bg-[#3B3B3B] rounded-[20px] p-5 relative flex justify-center flex-wrap items-center hover:scale-95 ease-linear duration-200 max-desktop:p-4 max-laptop:w-[30%] max-other:p-2 max-large:justify-between max-large:w-[48%] max-large:p-3 max-tablet:w-[75%] max-tablet:justify-around max-meduim:w-[90%] max-mobile:w-[100%]'>
                                    <div className='w-[40px] h-[40px] bg-[#2B2B2B] rounded-[50%] absolute top-5 left-5 flex justify-center items-center max-other:top-1 max-other:left-1 max-large:w-[30px] max-large:h-[30px]'>
                                        <h1 className='text-[16px] text-[#858584] font-normal font-[space-mono] max-large:text-[13px]'>{value.id}</h1>
                                    </div>
                                    <img className='w-[120p] h-[120px] max-large:w-[60px] max-large:h-[60px]' src={value.img} alt="" />
                                    <div className='max-large:flex max-large:h-full flex-col justify-start'>
                                        <h1 className='text-[22px] text-white font-semibold w-full text-center mt-5 font-[work-sans] max-other:text-[20px] max-large:w-[0] max-large:leading-[0px]'>{value.title}</h1>
                                        <h2 className='text-[16px] font-normal text-white font-[space-mono] mt-2 max-desktop:text-[14px] max-other:text-[13px] max-large:mt-4'> <span className='text-[#858584]'>Total Sales:</span> {value.price} ETH</h2>
                                    </div>
                                </div>
                            )
                        })
                    }

                    <button className=' hidden py-5 px-[50px] border-2 border-[#A259FF] rounded-[20px] text-white text-[16px] font-[work-sans] font-semibold mt-7 hover:scale-95 ease-linear duration-200 max-tablet:block max-tablet:flex justify-center items-center gap-3 max-tablet:w-[75%] max-meduim:w-[90%] max-mobile:w-[100%]'>
                        <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2l0 82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9l0-107.2c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" /></svg>
                        View Rankings
                    </button>

                </div>

            </div>

            <div className='py-20 px-[115px] font-[work-sans] text-white flex justify-between flex-wrap max-desktop:px-20 max-laptop:px-10 max-ipad:p-10 max-other:justify-around max-tablet:justify-between max-meduim:justify-between max-mobile:px-5 max-mobile:justify-center'>
                <h1 className='text-[38px] font-semibold w-full max-meduim:text-center max-meduim:text-[30px]'>Browse Categories</h1>

                {
                    categorie.map(value => {
                        return (
                            <div className='w-[23%] h-auto mt-[30px] bg-[#3B3B3B] rounded-[20px] overflow-hidden hover:scale-95 ease-linear duration-200 max-other:w-[45%] max-tablet:w-[48%] max-meduim:w-[47%] max-mobile:w-[90%]'>
                                <div className='relative w-full h-60 flex justify-center items-center max-other:h-[300px] max-meduim:h-[200px] max-mobile:h-72' style={{ background: `url(${value.img})`, backgroundPosition: 'center center', backgroundSize: 'cover' }}>
                                    <div className='absolute inset-0 backdrop-blur-[5px]'></div>
                                    <img className='relative z-[5]' src={value.icon} alt="" />
                                </div>
                                <div className='py-5 px-7 max-meduim:px-4'>
                                    <h2 className='text-[22px] font-semibold max-ipad:text-[16px] max-other:text-[20px] max-meduim:text-[18px] '>{value.title}</h2>
                                </div>
                            </div>

                        )
                    })
                }

            </div>

            <div className='py-20 px-[115px] font-[work-sans] text-white max-desktop:px-20 max-laptop:px-10 max-ipad:p-10 max-mobile:px-5'>

                <h1 className='text-[38px] font-semibold max-meduim:text-[30px] max-meduim:text-center'>Discover More NFTs</h1>

                <div className='flex justify-between items-end mt-[-30px] max-other:flex-wrap max-other:mt-5'>

                    <h2 className='text-[22px] font-normal max-ipad:max-w-[500px] max-other:max-w-[600px] max-meduim:text-center max-meduim:w-full max-meduim:text-[16px] '>Checkout Top Rated Creators on the NFT Marketplace</h2>

                    <button className='py-5 px-[50px]  border-2 border-[#A259FF] rounded-[20px] text-white text-[16px] font-[work-sans] font-semibold mt-7 flex justify-center items-center gap-3 hover:scale-95 ease-linear duration-200 max-tablet:hidden'>
                        <svg className='w-5 h-5 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2l0 82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9l0-107.2c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" /></svg>
                        View Rankings
                    </button>

                </div>

                <div className='w-full flex justify-between flex-wrap mt-[60px] max-tablet:justify-center max-tablet:mt-[30px]'>
                    {
                        discovers.map(value => {
                            return (
                                <div className='w-[30%] h-auto bg-[#3B3B3B] font-[work-sans] text-white rounded-[20px] overflow-hidden hover:scale-95 ease-linear duration-200 max-ipad:w-[32%] max-tablet:w-[70%] max-tablet:mt-[30px] max-meduim:w-[90%]'>
                                    <div className='w-full h-[300px] max-other:h-56 max-tablet:h-[320px]' style={{ background: `url(${value.image})`, backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
                                    <div className='py-5 px-[30px] max-other:px-5'>
                                        <h1 className='text-[22px] font-semibold max-other:text-[18px]'>{value.title}</h1>
                                        <div className=' w-full font-[space-mono] flex justify-start gap-3 mt-[5px]'>
                                            <img src={value.smallImg} alt="" />
                                            <h2 className='max-other:text-[14px]'>{value.name}</h2>
                                        </div>
                                        <div className='font-[space-mono] mt-6 flex justify-between max-other:flex-col'>
                                            <h1 className='max-other:border-b-2 pb-[2px]'>
                                                <span className='text-[#858584] text-[12px] font-normal'>Price</span>
                                                <br />
                                                {value.price} ETH
                                            </h1>

                                            <h1>
                                                <span className='text-[#858584] text-[12px] font-normal'>Highest Bid</span>
                                                <br />
                                                {value.bid} ETH
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    <button className='hidden py-5 px-7 border-2 border-[#A259FF] rounded-[20px] text-white text-[16px] font-[work-sans] font-semibold mt-7 hover:scale-95 ease-linear duration-200 max-tablet:block max-tablet:flex justify-center items-center gap-3 max-tablet:w-[75%] max-meduim:w-[90%] max-mobile:w-[90%]'>
                        <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2l0 82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9l0-107.2c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" /></svg>
                        View Rankings
                    </button>

                </div>

            </div>

            <div className="highlight w-full h-[660px] flex justify-center items-center max-desktop:px-20 max-laptop:px-10">

                <div className='max-w-[300px] w-full p-[30px] rounded-[20px] text-center box-border  bg-[#3b3b3bd8] text-[35px] font-semibold font-[space-mono] text-white flex justify-between flex-wrap'>

                    <h1 className='w-full text-[12px] font-normal mb-3'>Auction ends in:</h1>
                    
                    <h1 className='leading-[30px]'>
                        {hours}
                        <br />
                        <span className='text-[12px] font-normal'>Hours</span>
                    </h1>

                    <h1 className='leading-[30px]'>:</h1>

                    <h1 className='leading-[30px]'>
                        {minutes}
                        <br />
                        <span className='text-[12px] font-normal'>Mimutes</span>
                    </h1>

                    <h1 className='leading-[30px]'>:</h1>

                    <h1 className='leading-[30px]'>
                        {seconds}
                        <br />
                        <span className='text-[12px] font-normal'>Seconds</span>
                    </h1>

                </div>

            </div>

            <div className='py-20 px-[155px] font-[work-sans] text-white max-desktop:px-20 max-laptop:px-10 max-ipad:p-10 max-meduim:text-center max-mobile:px-5 max-mobile:py-10'>

                <h1 className='text-[38px] font-semibold max-meduim:text-[30px]'>How it works</h1>
                <p className='text-[22px] text-[#FFFFFF] font-normal mt-2 max-meduim:text-[16px]'>Find out how to get started</p>

                <div className='flex justify-between flex-wrap max-tablet:justify-center'>
                    {
                        icon.map(value => {
                            return (
                                <div className='px-10 text-center font-[work-sans] py-5 bg-[#3B3B3B] w-[30%] rounded-[20px] mt-12 hover:scale-95 ease-linear duration-200  max-ipad:px-2 max-large:w-[32%] max-tablet:w-[70%] max-tablet:flex justify-between max-meduim:w-[90%] max-meduim:items-center max-mobile:w-full'>
                                    <img className='w-full max-tablet:w-24 max-tablet:h-24' src={value.iconImg} alt="" />

                                    <div className='max-tablet:text-left max-tablet:px-5'>
                                        <h1 className='text-[22px] font-semibold max-other:text-[19px] max-large:text-[16px] max-tablet:text-[19px] max-meduim:text-[16px]'>{value.title}</h1>
                                        <h2 className='text-[16px] font-normal mt-[10px] max-other:text-[14px] max-large:text-[12px]'>{value.info}</h2>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>

            </div>

            <div className='py-20 px-[155px] font-[work-sans] text-white max-desktop:px-20 max-laptop:px-10 max-ipad:p-10' >
                <div className='w-full h-auto p-[60px] bg-[#3B3B3B] rounded-[20px] flex justify-between flex-wrap max-desktop:p-[30px] max-ipad:flex-col items-center max-ipad:bg-transparent max-meduim:p-0 ' >

                    <div className=' rounded-[20px] max-w-[400px] w-full h-[300px] max-ipad:max-w-[450px] max-ipad:h-[350px]' style={{ background: `url(${astranout})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover' }}></div>

                    <div className='max-w-[425px] w-full h-auto py-5 max-ipad:text-center mt-5'>

                        <h1 className='text-[40px] font-semibold leading-[45px] max-meduim:text-[30px]'>
                            Join our weekly digest
                        </h1>
                        <h2 className='text-[22px] font-normal mt-3 max-meduim:text-[16px]'>
                            Get exclusive promotions & updates straight to your inbox.
                        </h2>

                        <div className="join mt-10">
                            <input
                                type="text"
                                placeholder="Enter your email here"
                                className="input input-bordered join-item rounded-[15px] h-[60px] max-meduim:max-w-[250px] w-full"
                            />
                            <div className="join">
                                <button className="btn h-[60px] rounded-[20px] bg-[#A259FF] hover:bg-[#A259FF] active:bg-[#A259FF] join-item font-[work-sans] text-white px-[50px] py-5 max-meduim:max-w-[50px] w-full">Subscribe</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div >
    )
}

export default Home