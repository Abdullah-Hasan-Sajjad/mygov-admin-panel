import React from "react";
import Selector from "./Selector";

export default function FullSelectionPortion({label}){
    return(
        <div className="w-full mb-6 flex justify-between bg-[#bcd9c5] px-6 py-3">
            <div className="flex flex-row items-center justify-center w-full gap-3 md:gap-10">
                <div className="text-right">
                    <label>{label}</label>
                </div>
                <div className="grow">
                    <Selector
                    placeholder={"সেবা বাছাই করুন..."}
                    searchInputPlaceholder={"সেবা খুজুন..."} />
                </div>
            </div>
        </div>
    );
}