import React from 'react'
import Wrapper from '../../shared/Wrapper/page'
import ImgBanner from '../../../assets/images/bannerimg.png'
import Image from 'next/image'
import PrimaryButton from '../button'

export function Hero() {
    return (
        <Wrapper>
            <section>
                <div className='flex flex-row flex-wrap '>

                    <div className='flex-1 flex-col md:flex-row justify-end sm:mt-16 '>
                        <h4 className='text-teal-800 mx-1 mb-4 font-semibold text-lg'>A One and Quarter Years Panaverse DAO Earn as you Learn Program</h4>
                        <h1 className='text-4xl sm:text-6xl font-bold '>Certified Web 3.0 and Metaverse Developer</h1>
                        <p className='mt-6 md:text-xl text-slate-600'>Getting Ready for the Next Generation of the Internet
                            Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies </p>
                        <PrimaryButton href="/" color="-yellow-400"> Learn more</PrimaryButton>
                    </div>
                    <div className='flex justify-end sm:pl-16'>
                        <Image src={ImgBanner} alt="metaverse image" />
                    </div>
                </div>

            </section>
        </Wrapper>

    )
}
