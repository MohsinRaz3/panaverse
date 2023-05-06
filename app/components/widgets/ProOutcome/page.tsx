import Image from "next/image";
import React from "react";
import Wrapper from "../../shared/Wrapper/page";
import earndev from '../../../assets/images/codeing.png'
import peng from '../../../assets/images/pen.png'


export default function ProOutcome() {
  const outcomeArray = ["Product Ownership", "Freelancing", "Global Marketing by Panaverse DAO", "Boosting Economy"]
  return (
    <section className="mt-16 md:mt-28">
      <Wrapper>
        <div className="flex flex-col-reverse gap-x-8 items-center">
          {/* Left Image */}
          <div className="flex-1">
            <Image src={earndev} alt="earn while learn" />
          </div>
          {/* Right content */}
          <div className="flex-1 ">
            <h2 className="font-bold text-2xl sm:text-4xl my-3">The Outcome for Participants of the Program</h2>
            <p className="text-base sm:text-xl text-slate-600">The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also giving the economy a much-needed boost by expanding software exports.</p>

            <div className="mt-6 grid grid-cols-2 gap-x-2 gap-y-4">
              {outcomeArray.map((item, i) =>
                <div className="flex items-center gap-x-2" key={i}>
                  <Image className="flex-shrink-0" src={peng} height={10} width={20} alt="points" />
                  <h3 className="font-medium text-lg">{item}</h3>
                </div>
              )}
            </div>
          </div>
        </div>

      </Wrapper>
    </section>
  )
}
