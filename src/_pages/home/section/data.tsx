import Accordion from "@/features/Accordion/ui/accordion-data";
import React, { FC } from "react";

interface AccordionItem {
  title: string; // Заголовок
  desc: string[]; // Массив строк для описания
}

interface AccordionDataInterface {
  titles: string[]; // Массив заголовков
  data?: AccordionItem[]; // Массив объектов с данными
}

const AccordionData: FC<AccordionDataInterface> = ({ titles, data }) => {
  return (
    <>
      <div className="flex justify-between mb-10">
        {Array.isArray(titles) && titles.length > 0 && titles.map((t, index) => (
          <h5 key={index} className="flex-1 text-2xl text-primary font-lato text-center">{t}</h5>
        ))}
      </div>
      {Array.isArray(data) && data.length > 0 && data.map((item, index) => (
        <div key={index}>
          <p className="desc1 text-center mb-8">{item.title}</p>
          <div className="flex justify-between mb-10">
            {Array.isArray(item.desc) && item.desc.length > 0 && item.desc.map((el, idx) => (
              <p key={idx} className="flex-1 desc2">{el}</p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

const Data = () => {
  return (
    <div className="container mt-[100px]">
      <Accordion title="How is a Typical Pregnancy Different from Surrogacy?">
        <AccordionData 
          titles={['Обычная беременность', 'Обычная беременность']} 
          data={[
            {
              title: 'Item 1',
              desc: [
                'В суррогатной беременности женщина (суррогатная мать) вынашивает ребенка, который генетически связан с генетическими родителями (обычно это яйцеклетка матери и сперма отца) или с донорами, но не с ней самой.',
                'В суррогатной беременности женщина (суррогатная мать) вынашивает ребенка, который генетически связан с генетическими родителями (обычно это яйцеклетка матери и сперма отца) или с донорами, но не с ней самой.'
              ]
            },
            {
              title: 'Item 2',
              desc: [
                'В суррогатной беременности женщина (суррогатная мать) вынашивает ребенка, который генетически связан с генетическими родителями (обычно это яйцеклетка матери и сперма отца) или с донорами, но не с ней самой.',
                'В суррогатной беременности женщина (суррогатная мать) вынашивает ребенка, который генетически связан с генетическими родителями (обычно это яйцеклетка матери и сперма отца) или с донорами, но не с ней самой.'
              ]
            }
          ]}
        />
      </Accordion>
      <Accordion title="Section 2">
        <p>This is the content of section 2. Feel free to customize it.</p>
      </Accordion>
    </div>
  );
};

export default Data;
