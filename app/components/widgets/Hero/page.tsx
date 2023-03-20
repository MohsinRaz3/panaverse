import React from 'react'
import Wrapper from '../../shared/Wrapper/page'
import ImgBanner from '../../../assets/images/bannerimg.png'
import Image from 'next/image'

export function Hero() {
    return (
        <section>
            <Wrapper>
                <div className='flex items-center'>
                    <div className='flex-1'>
                        <h4 className='text-teal-800 font-semibold text-lg'>A One and Quarter Years Panaverse DAO Earn as you Learn Program</h4>
                        <h1 className='text-6xl font-bold '>Certified Web 3.0 and Metaverse Developer</h1>
                        <p className='mt-6 text-lg text-slate-600'>Getting Ready for the Next Generation of the Internet
                            Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies </p>
                        <button className='bg-red-500 p-2 m-2 rounded-full'> Learn more</button>
                    </div>
                    <div className='flex-1'>
                        <Image src={ImgBanner} width="480" height='470' alt="hero image" />

                    </div>
                </div>
            </Wrapper>
        </section>
    )
}
