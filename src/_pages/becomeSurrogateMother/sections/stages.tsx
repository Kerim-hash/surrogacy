import React, { FC } from "react";
import { DictionaryInterface } from "@/shared/types/dictionary";
import CardInfo from "@/shared/ui/Card/card-info";
import StagesImage from '@/assets/BecomeSurrogateMother/stages.webp'
import Image from "next/image";
import { StagesCard } from "@/shared/ui";
import StagesGrid from "@/shared/ui/Card/card-stages";
import { CardInterface } from "@/shared/types/card";




const Stages: FC<DictionaryInterface> = ({ dictionary }) => {
  return <div className="container mt-[100px]">
    <h2 className="title">{dictionary.becomeSurrogateMother.stages.title}</h2>
    <p className="desc1 max-w-1/2">{dictionary.becomeSurrogateMother.stages.desc}</p>

    <div className="grid gap-4 gap-y-10 mt-[140px]">
      {/* Первые два ряда: 3 карточки в каждой строке */}
      <div className="grid grid-cols-3 gap-4">
        {dictionary.becomeSurrogateMother.stages.stagesProgram.slice(0, 6).map(
          (info: CardInterface, index: number) => (
            <StagesCard
              key={`${info.title}+${index}`}
              desc={info.desc}
              title={info.title}
            />
          )
        )}
      </div>

      {/* Третий ряд: 2 карточки, каждая занимает 50% ширины */}
      <div className="grid grid-cols-2 gap-4">
        {dictionary.becomeSurrogateMother.stages.stagesProgram.slice(6, 8).map(
          (info: CardInterface, index: number) => (
            <StagesCard
              key={`${info.title}+${index}`}
              desc={info.desc}
              title={info.title}
            />
          )
        )}
      </div>
    </div>

    <div className="flex gap-5 mt-[100px]">
      <div className="flex-1">
        <Image className="rounded-4xl mx-auto" src={StagesImage} width={550} alt="become-surrogate-mother" />
      </div>
      <div className="flex-1">
        <h2 className="title mb-10">
          {dictionary.becomeSurrogateMother.stages.supTitle}
        </h2>
        <p className="desc2">
          {dictionary.becomeSurrogateMother.stages.desc1}
        </p>
      </div>
    </div>


    <div className="flex flex-wrap gap-4 gap-y-10 mt-[140px]">
      {dictionary.becomeSurrogateMother.stages.stagesList.map((info, index) => {
        return <CardInfo key={`${info.title}+${index}`} index={index + 1} desc={info.desc} title={info.title} />
      })}
    </div>
  </div>;
};

export default Stages;
