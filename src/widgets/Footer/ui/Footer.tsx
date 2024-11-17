import React, { FC, useEffect, useState } from "react";
import Logo from '@/assets/Logo.svg'
import Image from "next/image";
import Rights from '@/assets/rights.png'
import { DictionaryType } from "@/shared/config/i18n";
import Link from "next/link";

const Footer: FC<{ dictionary: DictionaryType, lang: string }> = ({ dictionary, lang }) => {
  const navigation = [
    { name: dictionary.nav, link: '' },
    { name: dictionary.nav, link: '1' },
    { name: dictionary.nav, link: '2' },
    { name: dictionary.nav, link: '3' },
    { name: dictionary.nav, link: '4' }
  ];

  const Links = [
    { name: "WhatsApp", link: '' },
    { name: "Instagram", link: '1' },
    { name: "Telegram", link: '2' },
    { name: "Facebook", link: '3' },
  ]

  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    // Проверка на клиентскую среду
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname.replace(/\/$/, ""));
    }
  }, []);


  return <div className="bg-white mt-[100px] pt-[80px] ">
    <div className="flex container pb-[50px]">
      <div className="flex-1 flex flex-col justify-between">
        <nav className="flex gap-4 flex-col">
          {navigation.map((item, index) => {
            const href = `/${lang}/${item.link}`.replace(/\/$/, "");
            const isActive = currentPath === href;
            return (
              <Link
                key={index}
                href={`/${lang}/${item.link}`}
                className={`${isActive ? '!text-primary' : 'hover:text-primary'} desc2 text-secondary transition-colors duration-200`}
              >
                {item.name[index]}
              </Link>
            );
          })}
        </nav>
        <Image src={Logo} alt="logo" />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h4 className="subtitle mb-2">{dictionary.footer.subtitles[0]}</h4>
          <p className="desc2">{dictionary.footer.office}</p>
        </div>
        <div>
          <h4 className="subtitle mb-2">{dictionary.footer.subtitles[1]}</h4>
          <p className="desc2">{dictionary.footer.schedule}</p>
          <p className="desc2 mt-2">{dictionary.footer.scheduleInfo}</p>
        </div>
        <div>
          <h4 className="subtitle mb-2">{dictionary.footer.subtitles[2]}</h4>
          <div className="flex gap-8 mt-4">
            {Links.map((link, index) => {
              return <a className="desc2 underline" href={link.link}>{link.name}</a>
            })}
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-end justify-between">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.720806136616!2d74.59064007631812!3d42.857628071150955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb62aa001c9df%3A0xa09bde56c77da871!2z0YPQuy4g0JPQvtGA0YzQutC-0LPQviAxMjksIDEyOSDQk9C-0YDRjNC60LjQuSDQutOp0YfTqdGB0q8sINCR0LjRiNC60LXQuiA3MjAwNTI!5e0!3m2!1sru!2skg!4v1731648914702!5m2!1sru!2skg" width="400" height="200" className="border-none rounded-3xl" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <div className="text-end mt-14">
          <p>
            <a className="text-gray text-3xl font-bold" href="tel:+996556668989">+996 556 668 989</a>
          </p>
          <p>
            <a className="text-gray text-3xl font-bold" href="mailto:tang.ivf@gmail.com">tang.ivf@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
    <div className="flex justify-between container py-6">
      <div></div>
      <p>© Tang 2024 - Все права защищены</p>
      <Image src={Rights} alt="Rights" />

    </div>
  </div>;
};

export default Footer;
