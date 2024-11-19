import { DictionaryType } from "@/shared/config/i18n";
import React, { FC } from "react";
import telegram from '@/assets/telegram.svg'
import instagram from '@/assets/instagram.svg'
import facebook from '@/assets/facebook.svg'
import whatsapp from '@/assets/whatsapp.svg'
import Image from "next/image";

const ContactsSection: FC<{ dictionary: DictionaryType }> = ({ dictionary }) =>  {
  return <div className="container pt-[100px]">
            <div className="title mb-[100px]">{dictionary.contacts.supTitle}</div>  
            <div className="flex justify-between">
                <a className="rounded-4xl text-3xl font-bold py-9 px-6 flex bg-background items-center" href="/">whatsapp <div className="rounded-full p-4 bg-[#25D366] ml-10"><Image src={whatsapp} alt="whatsapp" /></div></a>
                <a className="rounded-4xl text-3xl font-bold py-9 px-6 flex bg-background items-center" href="/">Instagram <div className="rounded-full p-4 bg-[#F00073] ml-10"><Image src={instagram} alt="whatsapp" /></div></a>
                <a className="rounded-4xl text-3xl font-bold py-9 px-6 flex bg-background items-center" href="/">Telegram <div className="rounded-full p-4 bg-[#0088CC] ml-10"><Image src={telegram} alt="whatsapp" /></div></a>
                <a className="rounded-4xl text-3xl font-bold py-9 px-6 flex bg-background items-center" href="/">Facebook <div className="rounded-full p-4 bg-[#1877F2] ml-10"><Image src={facebook} alt="whatsapp" /></div></a>
                </div> 
    </div>;
};

export default ContactsSection;
