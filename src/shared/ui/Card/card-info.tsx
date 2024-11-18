import React, { FC } from "react";

interface CardInfo {
    index: number,
    title: string,
    desc: string
}

const CardInfo: FC<CardInfo> = ({ index, title, desc }) => {
    return <div className="w-full sm:w-[calc(33.333%-1rem)]">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary text-textPrimary font-bold mb-4">{index}</div>
        <h5 className="subtitle py-6">{title}</h5>
        <p className="desc2">{desc}</p>
    </div>
}

export default CardInfo

