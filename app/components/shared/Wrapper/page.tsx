import { FC } from 'react'

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <section className="w-11/12 px-2 mx-auto">
            {children}
        </section>
    )
}
export default Wrapper