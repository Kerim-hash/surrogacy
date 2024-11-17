import { useDictionary } from "@/shared/lib/hooks";
import React, { FC, useState } from "react";
import ArrowDown from "@/assets/arrow-down.svg";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { DictionaryType } from "@/shared/config/i18n";

const AccordionStages: FC<{ dictionary: DictionaryType }> = ({ dictionary }) => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="flex flex-wrap gap-4 gap-y-10">
            {dictionary.family.programStages.data.map((item, index) => (
                <motion.div
                    key={index}
                    className="flex flex-col justify-between p-6 bg-white rounded-4xl w-full sm:w-[calc(33.333%-1rem)] transition-all"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5, // Увеличено время для плавности
                        ease: [0.25, 0.1, 0.25, 1], // Плавное замедление в конце
                    }}
                >
                    <div
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-white font-bold mb-4"
                    >
                        {index + 1}
                    </div>

                    <h3 className="font-medium text-textPrimary mb-2">
                        {item.title}
                    </h3>

                    <div className="flex-1">
                        <AnimatePresence initial={false}>
                            {expandedIndex === index ? (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{
                                        duration: 0.5, // Увеличено время
                                        ease: "easeInOut", // Мягкий переход
                                    }}
                                >
                                    <p className="text-textSecondary">{item.desc}</p>
                                </motion.div>
                            ) : (
                                <p className="text-textSecondary line-clamp-4">
                                    {item.desc}
                                </p>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Иконка внизу */}
                    <div
                        className="mt-4 p-3 flex justify-end cursor-pointer"
                        onClick={() => toggleAccordion(index)}
                    >
                        <motion.div
                            animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                            transition={{
                                duration: 0.5, // Увеличено время вращения
                                ease: [0.25, 0.1, 0.25, 1], // Плавный эффект
                            }}
                        >
                            <Image src={ArrowDown} alt="arrow-down" />
                        </motion.div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default AccordionStages;
