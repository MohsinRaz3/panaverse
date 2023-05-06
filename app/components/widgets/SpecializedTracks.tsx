"use client"
import Image from 'next/image'
import Wrapper from '../shared/Wrapper/page'
import { useState } from 'react'
import { QuarterBox } from '../shared/QuarterBox'
import { dataCourse } from '../widgets/CourseData'


export const SpecializedTracks = () => {
    const [showCourse, setShowCourse] = useState("ai");
    const selectedCoursedata = dataCourse.find((item) => item.slug === showCourse)

    return (
        <section>
            <Wrapper>
                {/* Header */}
                <div>
                    <h2 className='text-4xl font-bold'>Specialized Tracks</h2>
                    <p className='mt-3 text-base sm:text-xl text-slate-600 max-w-screen-sm'>After completing the first two quarters the participants will select one or more specializations consisting of two courses each:</p>
                </div>
                {/* Content Left */}
                <div className='mt-10 flex flex-col-reverse lg:flex-row  gap-x-6 gap-y-8'>
                    <div className='self-start sticky top-20  basis-8/12 shadow-xl rounded-xl border-slate-300 py-8 px-6'>
                        <h4 className='text-primary text-lg'>Specialized Program</h4>
                        <h3 className='text-2xl font-bold'>{selectedCoursedata?.header}</h3>
                        <p className='text-lg text-slate-600 mt-2 max-w-screen-md'>{selectedCoursedata?.description}</p>
                        <button className='text-teal-700 text-xl mt-4 underline flex items-end'>
                            learn more <svg fill="#2ec27e" width={20} height={20} viewBox="0 0 56.00 56.00" xmlns="http://www.w3.org/2000/svg" stroke="#2ec27e" strokeWidth="1.176"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 13.8320 43.5625 C 14.4883 43.5625 14.9336 43.3516 15.4258 43.1172 L 41.7695 31.2813 C 43.1055 30.6484 44.1602 29.6172 44.1602 28.1172 C 44.1602 26.6406 43.1289 25.5625 41.7461 24.9532 L 15.4258 12.8359 C 14.9570 12.6016 14.5351 12.4375 13.9258 12.4375 C 12.7070 12.4375 11.8398 13.2813 11.8398 14.5235 C 11.8398 15.6016 12.4023 16.2110 13.3867 16.6797 L 38.6055 27.8125 L 38.6055 28.0703 L 13.3867 39.2969 C 12.4023 39.7656 11.8398 40.3750 11.8398 41.4531 C 11.8398 42.7422 12.6836 43.5625 13.8320 43.5625 Z"></path></g></svg>
                        </button>

                        <div className='flex flex-col gap-y-8 sm:flex-row mt-8'>
                            {selectedCoursedata?.quarters.map((quarter) =>
                                <QuarterBox key={quarter.number} description={quarter.description} header={quarter.header} number={quarter.number} haveBorder={false} />
                            )}
                        </div>

                    </div>
                    {/* Content Right */}
                    <div className=' px-4 space-y-4 basis-4/12 flex-1  bg-slate-100'>
                        {dataCourse.map((items, i) => (

                            <div onClick={() => setShowCourse(items.slug)} key={items.slug} className='flex items-center gap-x-4 cursor-pointer '>
                                <div className='mt-5 flex-shrink-0 h-24 w-28'>
                                    <Image alt="tracks" src={items.image} className="object-cover  h-24 rounded-md" />
                                </div>
                                <div>
                                    <h4 className='text-primary font-medium'>Specialized Program</h4>
                                    <h3 className='text-md font-semibold'>{items.header}</h3>
                                </div>

                            </div>

                        ))}


                    </div>
                </div>

            </Wrapper>
        </section>
    )
}

