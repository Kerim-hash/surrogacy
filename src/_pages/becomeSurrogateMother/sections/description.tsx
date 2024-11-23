import { DictionaryInterface } from "@/shared/types/dictionary";
import React, { FC } from "react";

const Description: FC<DictionaryInterface> = ({ dictionary }) =>  {
  return <div className="container flex justify-end pt-[100px]">
    <p className="desc1 w-1/2">{dictionary.becomeSurrogateMother.hero.desc}</p>
  </div>;
};

export default Description;
