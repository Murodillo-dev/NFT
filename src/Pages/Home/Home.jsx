import React, { useState } from 'react'
import { trending, creators, categories, discover } from './Data'

const Home = () => {
    const [data, setData] = useState(trending)
    const [creator, setCreator] = useState(creators)
    const [categorie, setCategorie] = useState(categories)
    const [discovers, setDiscovers] = useState(discover)
    
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
                                    <img className='w-full hover:scale-95 ease-linear duration-200' src={value.mainImg} alt="" />
                                    <div className='flex justify-between mt-4'>
                                        <div className='w-[30%] rounded-[20px] hover:scale-95 ease-linear duration-200' style={{ background: `url(${value.secondImg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover' }}></div>
                                        <div className='w-[30%] rounded-[20px] hover:scale-95 ease-linear duration-200' style={{ background: `url(${value.thirdImg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover' }}></div>
                                        <div className='w-[30%] h-[100px] hover:scale-95 ease-linear duration-200 bg-[#A259FF] flex justify-center items-center text-[22px] text-white font-[work-sans] font-semibold rounded-[20px] '><h1>{value.statistic}+</h1></div>
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

            <div className='py-20 px-[115px] font-[work-sans] text-white'>

                <h1 className='text-[38px] font-semibold'>Top creators</h1>

                <div className='flex justify-between items-end mt-[-60px]'>

                    <h2 className='text-[22px] font-normal'>Checkout Top Rated Creators on the NFT Marketplace</h2>

                    <button className='py-5 px-[50px]  border-2 border-[#A259FF] rounded-[20px] text-white text-[16px] font-[work-sans] font-semibold mt-7 flex justify-center items-center gap-3 hover:scale-95 ease-linear duration-200'>
                        <svg className='w-5 h-5 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2l0 82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9l0-107.2c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" /></svg>
                        View Rankings
                    </button>


                </div>

                <div className='flex justify-between flex-wrap mt-[45px]'>
                    {
                        creator.map(value => {
                            return (
                                <div className='text-white font-[work-sans] w-[23%] my-[15px] h-auto bg-[#3B3B3B] rounded-[20px] p-5 relative flex justify-center flex-wrap items-center hover:scale-95 ease-linear duration-200'>
                                    <div className='w-[40px] h-[40px] bg-[#2B2B2B] rounded-[50%] absolute top-5 left-5 flex justify-center items-center'>
                                        <h1 className='text-[16px] text-[#858584] font-normal font-[space-mono]'>{value.id}</h1>
                                    </div>
                                    <img className='w-[120p] h-[120px]' src={value.img} alt="" />
                                    <h1 className='text-[22px] text-white font-semibold w-full text-center mt-5 font-[work-sans]'>{value.title}</h1>
                                    <h2 className='text-[16px] font-normal text-white font-[space-mono] mt-2'> <span className='text-[#858584]'>Total Sales:</span> {value.price} ETH</h2>
                                </div>
                            )
                        })
                    }
                </div>

            </div>

            <div className='py-20 px-[115px] font-[work-sans] text-white flex justify-between flex-wrap'>
                <h1 className='text-[38px] font-semibold w-full'>Browse Categories</h1>

                {
                    categorie.map(value => {
                        return (
                            <div className='w-[23%] h-auto mt-[30px] bg-[#3B3B3B] rounded-[20px] overflow-hidden hover:scale-95 ease-linear duration-200'>
                                <div className='relative w-full h-60 flex justify-center items-center' style={{ background: `url(${value.img})`, backgroundPosition: 'center center', backgroundSize: 'cover' }}>
                                    <div className='absolute inset-0 backdrop-blur-[5px]'></div>
                                    <img className='relative z-[5]' src={value.icon} alt="" />
                                </div>
                                <div className='py-5 px-7'>
                                    <h2 className='text-[22px] font-semibold'>{value.title}</h2>
                                </div>
                            </div>

                        )
                    })
                }

            </div>

            <div className='py-20 px-[115px] font-[work-sans] text-white'>

                <h1 className='text-[38px] font-semibold'>Discover More NFTs</h1>

                <div className='flex justify-between items-end mt-[-60px]'>

                    <h2 className='text-[22px] font-normal'>Explore new trending NFTs</h2>

                    <button className='py-5 px-[50px]  border-2 border-[#A259FF] rounded-[20px] text-white text-[16px] font-[work-sans] font-semibold mt-7 flex justify-center items-center gap-3 hover:scale-95 ease-linear duration-200'>
                        <svg className='w-5 h-5 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2l0 82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9l0-107.2c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" /></svg>
                        View Rankings
                    </button>


                </div>

                <div className='w-full flex justify-between mt-[60px]'>
                    {
                        discovers.map(value => {
                            return (
                                <div className='w-[30%] h-auto bg-[#3B3B3B] font-[work-sans] text-white rounded-[20px] overflow-hidden hover:scale-95 ease-linear duration-200'>
                                    <div className='w-full h-[300px]' style={{ background: `url(${value.image})`, backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
                                    <div className='py-5 px-[30px]'>
                                        <h1 className='text-[22px] font-semibold'>{value.title}</h1>
                                        <div className=' w-full font-[space-mono] flex justify-start gap-3 mt-[5px]'>
                                            <img src={value.smallImg} alt="" />
                                            <h2>{value.name}</h2>
                                        </div>
                                        <div className='font-[space-mono] mt-6 flex justify-between'>
                                            <h1>
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
                </div>

            </div>

            <div className="highlight w-full h-[660px] flex justify-center items-center">

                <div className='max-w-[300px] w-full p-[30px] rounded-[20px] text-center box-border  bg-[#3b3b3bd8] text-[35px] font-semibold font-[space-mono] text-white flex justify-between flex-wrap'>

                    <h1 className='w-full text-[12px] font-normal mb-3'>Auction ends in:</h1>

                    <h1 className='leading-[30px]'>
                        59
                        <br />
                        <span className='text-[12px] font-normal'>Hours</span>
                    </h1>

                    <h1 className='leading-[30px]'>:</h1>

                    <h1 className='leading-[30px]'>
                        59
                        <br />
                        <span className='text-[12px] font-normal'>Mimutes</span>
                    </h1>

                    <h1 className='leading-[30px]'>:</h1>

                    <h1 className='leading-[30px]'>
                        59
                        <br />
                        <span className='text-[12px] font-normal'>Seconds</span>
                    </h1>

                </div>

            </div>



        </div >
    )
}

export default Home