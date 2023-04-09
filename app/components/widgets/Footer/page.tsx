import Image from "next/image";
import React from "react";
import Link from "next/link";
import Wrapper from "../../shared/Wrapper/page";
import logo from '../../../../public/panalogo.png'

export default function Footer() {
    return (
        <section className="h-screen  ">
            <Wrapper>
                <div className="flex flex-col gap-y-10">

                    <div className="grid grid-cols-1 sm:grid-cols-2 space-y-6 mx-auto md:grid-cols-5 gap-x-3  text-slate-800">
                        <div className="flex justify-start max-[768px]:hidden"> <Image className="w-28 h-16" src={logo} alt="panaverse logo" /></div>

                        <div className="flex flex-col space-y-3">
                            <h3 className="font-semibold text-xl">Core Courses</h3>
                            <Link href="" >Artificial Intelligence</Link>
                            <Link href="" >Blockchain</Link>
                            <Link href="" >Internet of Things</Link>
                            <Link href="" >Cloud Native Computing</Link>
                            <Link href="" >Ambient Computing</Link>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <h3 className="font-semibold text-xl">Company</h3>
                            <Link href="" >About US</Link>
                            <Link href="" >Press</Link>
                            <Link href="" >Careers</Link>
                            <Link href="" >Contact Us</Link>
                            <Link href="" >Syllabus</Link>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <h3 className="font-semibold text-xl">Legal</h3>
                            <Link href="" >Cookies Policy</Link>
                            <Link href="" >Privacy Policy</Link>
                            <Link href="" >Terms of Service</Link>
                            <Link href="" >Law Enforcement</Link>
                            <Link href="" >Status</Link>
                        </div>
                        <div className="flex flex-col space-y-3 ">
                            <h3 className="font-semibold text-xl">Program Cities</h3>
                            <Link href="" >Karacchi</Link>
                            <Link href="" >Lahore</Link>
                            <Link href="" >Islamabad</Link>
                            <Link href="" >Peshawar</Link>

                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center sm: space-x-16">
                        <h4 className="text-slate-800">Copyright © 2023 PanaverseDAO. All rights reserved.</h4>
                        <div className="flex max-[681px]:pr-28 space-x-5 text-slate-800">
                            <div className="px-5 border-r-2 border-slate-300 border-spacing-x-4">github</div>
                            <div>twitter</div>

                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};
