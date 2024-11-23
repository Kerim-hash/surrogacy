import React, { FC } from "react";
import Image from "next/image";
import AboutImage from '@/assets/EggDonation/about.webp'
import { DictionaryType } from "@/shared/config/i18n";

const About: FC<{ dictionary: DictionaryType }> = ({ dictionary }) => {
    return <div className="container pt-[100px]">
        <div className="flex items-center gap-20">
            <div className="flex-1">
                <Image className="rounded-9xl min-h-[500px] object-cover" src={AboutImage} height={500} alt="about" />
            </div>
            <div className="flex-1">
                <h2 className="title">{dictionary.eggDonation.about.title}</h2>
                <p className="desc1 mt-6">{dictionary.eggDonation.about.desc}</p>
            </div>
        </div>
        <div className="card rounded-4xl bg-white p-6 pb-8 mt-[100px]">
            <h4 className="text-[48px] text-textSecondary font-bold">{dictionary.eggDonation.about.supTitle}</h4>
            <p className="desc1 text-textSecondary mt-4">{dictionary.eggDonation.about.underTitle}</p>
            <ul className="list-disc list-inside">
                {dictionary.eggDonation.about.list.map((list) => {
                    return <li className="desc1 mt-6 font-bold" key={list}>{list} </li>
                })}
            </ul>
        </div>
    </div>;
};

export default About;
