import { DictionaryInterface } from "@/shared/types/dictionary";
import RequestConsultation from "@/shared/ui/RequestConsultation";
import React, { FC } from "react";

const ContactUs: FC<DictionaryInterface> = ({ dictionary }) => {
    return <div className="container mt-[100px]">
        <h6 className="text-2xl text-textPrimary font-bold font-lato mb-4">{dictionary.becomeSurrogateMother.contactUs.title}</h6>
        <p className="desc2 w-1/2 ">{dictionary.becomeSurrogateMother.contactUs.desc}</p>
        <button className='btn btn-primary mt-8 w-1/2 '>{dictionary.common.GetAConsultation}</button>
    </div>;
};

export default ContactUs;
