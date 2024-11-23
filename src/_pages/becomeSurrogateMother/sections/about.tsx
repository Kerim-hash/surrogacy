import { DictionaryInterface } from "@/shared/types/dictionary";
import React, { FC } from "react";
import AboutImage from '@/assets/BecomeSurrogateMother/about.webp'
import Image from "next/image";

const About: FC<DictionaryInterface> = ({ dictionary }) =>{
  return <div className="container pt-[100px]">
        <div className="flex gap-20 items-center">
            <div className="flex-1">
                <h2 className="title mb-4">{dictionary.becomeSurrogateMother.about.title}</h2>
                {dictionary.becomeSurrogateMother.about.desc.map((desc) => {
                    return <p key={desc} className="desc1 mt-6">{desc}</p>
                })}
            </div>
            <div className="flex-1">
                <Image className="rounded-9xl mx-auto object-cover" src={AboutImage} alt="about" />
            </div>
        </div>
  </div>;
};

export default About;
