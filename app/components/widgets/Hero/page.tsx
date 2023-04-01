import React from 'react'
import Wrapper from '../../shared/Wrapper/page'
import ImgBanner from '../../../assets/images/bannerimg.png'
import Image from 'next/image'

export function Hero() {
    return (
        <Wrapper>
            <section>
                <div className='flex md:flex-col   '>
                    <div className='flex-1'>
                        <h4 className='text-teal-800 mx-1 font-semibold text-lg'>A One and Quarter Years Panaverse DAO Earn as you Learn Program</h4>
                        <h1 className='text-4xl sm:text-6xl font-bold '>Certified Web 3.0 and Metaverse Developer</h1>
                        <p className='mt-6 md:text-lg text-slate-600'>Getting Ready for the Next Generation of the Internet
                            Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies </p>
                        <button className='bg-red-700 text-white p-2 my-4 rounded-full hover:bg-red-800 '> Learn more</button>
                    </div>
                    <div className=' sm:pl-16 '>
                        <Image src={ImgBanner} alt="metaverse image" />
                    </div>
                </div>

            </section>
        </Wrapper>

    )
}
