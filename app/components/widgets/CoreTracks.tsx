import React from 'react'
import { QuarterBox } from '../shared/QuarterBox'
import Wrapper from '../shared/Wrapper/page'
import PrimaryButton from './button'

const CoreTracks = () => {
    const quarterBox = [
        {
            id: 1,
            header: "Quarter I",
            description: "CS101: Object Oriented Programming with TypeScript.",
            number: "1"
        },
        {
            id: 2,
            header: "Quarter II",
            description: "CS101: Object Oriented Programming with TypeScript.",
            number: "2"
        }, {
            id: 3,
            header: "Quarter III",
            description: "CS101: Object Oriented Programming with TypeScript.",
            number: "3"
        }
    ]
    return (
        <section className='lg:mt-28 mt:16'>
            <Wrapper>
                <div className='max-w-screen-sm'>
                    <h4 className='text-teal-700 font-semibold text-lg mt-4 pl-2'> Program of Studies</h4>
                    <h2 className='text-4xl font-bold'>Core Courses <br />(Common in All Specializations)</h2>
                    <p className='mt-3 text-lg text-slate-600'>Every participant of the program will start by completing the following two core courses:</p>
                </div>
                <div>
                    <PrimaryButton href="/">Learn more</PrimaryButton>
                </div>
                <div className='max-w-screen-lg my=20 flex flex-col md:flex-row items-center gap-y-4 gap-x-6 mb-10 mx-auto'>
                    {quarterBox.map((quarter) => (
                        <QuarterBox key={quarter.id} description={quarter.description} header={quarter.header} number={quarter.number} haveBorder={true} />
                    ))}
                </div>
            </Wrapper>
        </section>
    )
}

export default CoreTracks