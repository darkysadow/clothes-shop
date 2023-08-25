"use client"

import { useState } from "react"
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function BuyMenu({ variants, options }) {
    const [selectedVariant, setSelectedVariant] = useState(variants[0]);
    
    const handleOptionClick = (optionName, optionValue) => {
        const newVariant = { ...selectedVariant };
        /* const variantIndex = variants.find((opt) => opt.selectedOptions.value === optionValue && opt.selectedOptions.name === optionName); */
        const optionIndex = newVariant.selectedOptions.findIndex((opt) => opt.name === optionName);
        if (optionIndex !== -1) {
          newVariant.price = variants.find(opt => opt.selectedOptions[optionIndex].value === optionValue).price
          newVariant.selectedOptions[optionIndex].value = optionValue;
        }
        setSelectedVariant(newVariant);
      };

      console.log(variants.find(opt => opt.selectedOptions[0].value === selectedVariant.selectedOptions[0].value))

    return (
        <div className="flex flex-col">
            <h2>Price</h2>
            {selectedVariant.price.amount + " " + selectedVariant.price.currencyCode}
            <h2>Variants</h2>
            {options.map((option, index) => <div key={index} className="space-y-0">
                <h2 className="text-xl font-medium my-2">{option.name}</h2>
                <div className="flex flex-row space-x-4">
                    {option.values.map((value, index) => (<div key={index}>
                        <div className={twMerge(
                            "hover:scale-[1.05] rounded-lg bg-slate-500 text-white border-slate-400 border-2 px-4 py-1",
                            value === selectedVariant.selectedOptions.find((opt) => opt.name === option.name)?.value &&
                            "bg-black",
                            

                        )
                            }
                            onClick={() => handleOptionClick(option.name, value)}>
                            {value}
                        </div>
                    </div>))}
                </div>
            </div>)}

        </div>
    )
}