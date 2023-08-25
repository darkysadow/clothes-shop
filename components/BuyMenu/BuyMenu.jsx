"use client"

import { useEffect, useState } from "react"
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function BuyMenu({ variants, options }) {
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);
  useEffect(() => {
    console.log(selectedVariant);
  }, [selectedVariant])
  const handleOptionClick = (optionName, optionValue) => {
    const newSelectedOptions = selectedVariant.selectedOptions.map((opt) =>
      opt.name === optionName ? { ...opt, value: optionValue } : opt
    );

    const matchingVariant = variants.find((variant) =>
      variant.selectedOptions.every((opt) =>
        newSelectedOptions.some((newOpt) => newOpt.name === opt.name && newOpt.value === opt.value)
      )
    );

    if (matchingVariant) {
      setSelectedVariant(matchingVariant);
    }
  };
    return (
        <div className="flex flex-col">
            {selectedVariant.availableForSale ?
                <><h2>Price</h2>
                <div>{selectedVariant.price.amount + " " + selectedVariant.price.currencyCode}</div></>
                : <h2>Not available</h2>
            }
            
            <h2>Variants</h2>
            {options.map((option, index) => <div key={index} className="space-y-0">
                <h2 className="text-xl font-medium my-2">{option.name}</h2>
                <div className="flex flex-row space-x-4">
                    {option.values.map((value, index) => (<div key={index}>
                        <div className={twMerge(
                            "hover:scale-[1.05] rounded-lg bg-slate-500 text-white border-slate-400 border-2 px-4 py-1",
                            value === selectedVariant.selectedOptions.find((opt) => opt.name === option.name)?.value &&
                            "bg-black hover:scale-1",
                            
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