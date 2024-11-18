import { DictionaryType } from "@/shared/config/i18n";
import React, { FC } from "react";
import AboutTang from "@/assets/about-tang.png"
import Image from "next/image";

const About: FC<{ dictionary: DictionaryType }> = ({ dictionary }) => {
    return <div className="container pt-[100px]">
            <div className="flex items-center">
                <div className="flex-1">
                    <Image src={AboutTang} alt="about" />
                </div>
                <div className="flex-1 pl-20">
                    <h2 className="title mb-6">{dictionary.about.about.title}</h2>
                    <p className="desc1 max-w-[470px]">{dictionary.about.about.desc}</p>
                </div>
            </div>
        </div>
};

export default About;
