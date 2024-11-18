import React, { FC } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { DictionaryType } from "@/shared/config/i18n";

const RequestConsultation: FC<{ dictionary: DictionaryType, sticky?: boolean }> = ({ dictionary, sticky }) => {
    return <motion.div
        className={`${sticky ? "sticky" : ""} top-20 self-start p-6 bg-background max-h-[184px] h-full rounded-4xl text-center`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
    >
        <h3 className="text-2xl font-medium text-textPrimary">{dictionary.common.RequestConsultationSupTitle}</h3>
        <button className="btn p-6 btn-primary mt-10 w-full">{dictionary.common.RequestConsultation}</button>
    </motion.div>
};

export default RequestConsultation;
