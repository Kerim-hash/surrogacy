import React, { FC, useEffect, useState } from "react";
import Logo from '@/assets/Logo.svg'
import Image from "next/image";
import { LanguageSwitcher } from "@/shared/ui";
import Link from "next/link";
import { useDictionary } from "@/shared/lib/hooks";
import { useRouter } from "next/router";

const Header: FC = () => {
  const { dictionary, lang } = useDictionary();

  const navigation = [
    { name: dictionary.nav, link: '' },
    { name: dictionary.nav, link: '1' },
    { name: dictionary.nav, link: 'egg-donation' },
    { name: dictionary.nav, link: 'about' },
    { name: dictionary.nav, link: 'contacts' }
  ];

  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    // Проверка на клиентскую среду
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname.replace(/\/$/, ""));
    }
  }, []);

  console.log(currentPath)

  return <header className="py-4 border-b border-[#DDDDDF] bg-background">
    <div className="wrapper container flex justify-between items-center">
      <div className="flex gap-8 items-center">
        <Image src={Logo} alt="logo" />
        <nav>
          {['РУ',
            'КЫР',
            'EN',
            '中文',].map((item) => (
              <a key={item} href="/" className="text-secondary mx-4">{item}</a>
            ))}
        </nav>
      </div>
      <a href="tel:+996556668989" className={`text-primary text-xl font-lato`}>
        +996 556 668 989
      </a>
    </div>

    <div className="wrapper container flex justify-between pt-4 items-center">
      <nav className="flex gap-8">
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

      <div className="flex items-center gap-8">
        <Link href={'./'} className="btn btn-primary">{dictionary.common.contact}</Link>
        <LanguageSwitcher />
      </div>
    </div>
  </header>
};


export default Header