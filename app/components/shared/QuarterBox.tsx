import { FC } from 'react'

interface IntProps {
    header: string;
    description: string;
    number: string;
    haveBorder?: boolean;
}

export const QuarterBox: FC<IntProps> = ({ header, description, number, haveBorder }) => {
    return (

        <div className={`text-center rounded-md w-9/12 h-40 p-5 m-5 my-auto relative ${haveBorder && "border"}`}>
            <h4 className='font-bold text-lg'>{header} </h4>
            <p className='mt-2 text-slate-600'>{description}</p>
            <span className='absolute top-0 text-gray-200 right-10 text-9xl font-bold -z-10'>{number}</span>
        </div>

    )
}
