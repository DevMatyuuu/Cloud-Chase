import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
export function Faqs() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
    <div className='container mx-auto md:max-w-[1200px] md:rounded-xl md:px-auto text-white text-justify  bg-gradient-to-b from-gray-900 to-gray-600 px-7 pb-16 mb-10 md:pl-20 md:pr-20 md:pt-5 font-poppins'>
        <h1 className='font-poppins md:text-3xl text-2xl  md:mb-9 mb-7 pt-9 font-bold text-center'>FAQs</h1>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(1)} className="md:mb-5   ">Comparison between Vape and Cigarette?</AccordionHeader>
                <AccordionBody className='md:mb-5'>
                The difference between smoking and vaping is that smoking delivers nicotine by burning tobacco, which can cause smoking-related illnesses, and vaping can deliver nicotine by heating a liquid in a much less harmful way. Vaping is less harmful and cheaper than smoking, and can have a similar feel.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(2)} className="md:mb-5">
                How do I choose the vaping product that’s right for me?
                </AccordionHeader>
                <AccordionBody className='md:mb-5'>
                We always recommend to give those vapes with less nicotine a try first in order to know whta's the best for you. In this way, you can tell your nicotine tolerance so that you will know what vape is right for you.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(3)} >
                Can I return products and get a refund if unsatisfied?
                </AccordionHeader>
                <AccordionBody className='md:mt-5'>
                No. Buyers should be responsible on their own satisfaction because it is their own choice and we give our best to provide quality products to satisfy your needs. We accept return and refund to those products that has factory defects or those unused products within 30 days.
                </AccordionBody>
            </Accordion>
      </div>
    </>
  );
}
export default Faqs;