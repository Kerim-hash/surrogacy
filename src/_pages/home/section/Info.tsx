import React, { FC } from "react";
import Info1 from '@/assets/family-info-1.svg';
import Info2 from '@/assets/family-info-2.svg';
import Info3 from '@/assets/family-info-3.svg';
import Info4 from '@/assets/family-info-4.svg';
import Info5 from '@/assets/family-info-5.svg';
import Info6 from '@/assets/family-info-6.svg';
import Image from "next/image";
import FirstBlock from '@/assets/info.png'
import SecondBlock from '@/assets/info1.png'
import { useDictionary } from "@/shared/lib/hooks";
import { DictionaryType } from "@/shared/config/i18n";

const Info: FC<{dictionary: DictionaryType}> = ({dictionary}) => {

    const infoData = [
        { src: Info1, text: "Selection of surrogate mother - without waiting" },
        { src: Info2, text: "Personalized assistance throughout the process" },
        { src: Info3, text: "Comprehensive medical support" },
        { src: Info4, text: "Legal guidance and support" },
        { src: Info5, text: "Transparent communication at every step" },
        { src: Info6, text: "Post-birth care and follow-up" },
    ];

    return (
        <div className="container py-8">
            <div className="flex items-center">
                <div className="flex-1">
                    <Image className="mx-auto" src={FirstBlock} alt="info" />
                </div>
                <div className="flex-1 space-y-10">
                    <h5 className="title ">{dictionary.family.info.infoBlock[0].title}</h5>
                    <hr className="w-full h-2 my-4 bg-primary border-0 rounded md:my-8 max-w-[140px]" />
                    <p className="desc1">{dictionary.family.info.infoBlock[0].desc[0]}</p>
                    <p className="desc1">{dictionary.family.info.infoBlock[0].desc[1]}</p>
                </div>

            </div>

            <div className="flex items-center">
                <div className="flex-1 space-y-10">
                    <hr className="w-full h-2 my-4 bg-primary border-0 rounded md:my-8 max-w-[140px]" />
                    <p className="desc1">{dictionary.family.info.infoBlock[1].desc[0]}</p>
                    <p className="desc1">{dictionary.family.info.infoBlock[1].desc[1]}</p>
                </div>
                <div className="flex-1">
                    <Image className="mx-auto" src={SecondBlock} alt="info" />
                </div>
            </div>


            <div className="mt-[100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {infoData.map((item, index) => (
                    <div key={index} className="card p-4 text-center">
                        <Image src={item.src} alt="info" className="mx-auto mb-4" />
                        <p className="text-gray-700">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Info;
