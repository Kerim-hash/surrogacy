import { DictionaryType } from "@/shared/config/i18n";
import React, { FC } from "react";
import director from '@/assets/director.png'
import Image from "next/image";
import tang from '@/assets/tang.png'

const Director: FC<{ dictionary: DictionaryType }> = ({ dictionary }) => {
    return <div className="bg-white py-[80px] mt-[100px]">
        <div className="container relative">
            <div className="flex gap-4 items-center">
                <div className="flex-1 max-w-[630px]">
                    <div className="desc2 italic">{dictionary.about.director.supTitle}</div>
                    <div className="space-y-5 mt-6">
                        {dictionary.about.director.desc.map((desc) => {
                            return <p key={desc} className="desc2 indent-8 italic">{desc}</p>
                        })}
                    </div>
                </div>
                <div className="flex-1">
                    <Image className="rounded-4xl mx-auto max-h-[470px] max-w-[560px] object-scale-down" src={director} alt="director" height={470} />
                    <div className="ml-10">
                    <h5 className="text-primary text-3xl font-bold mt-8">{dictionary.about.director.name}</h5>
                    <i className="desc2">{dictionary.about.director.position}</i>
                    </div>
                </div>
            </div>
            <Image className="absolute bottom-0 right-[20px]" src={tang} alt="tang" width={82} height={82} />
        </div>
    </div>;
};

export default Director;