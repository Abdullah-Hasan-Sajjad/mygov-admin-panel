import React from "react";
import Selector from "./Selector";

export default function FullSelectionPortion(){
    return(
        <div className="w-full mb-6 flex justify-between bg-[#bcd9c5] px-6 py-3">
            <div className="grid grid-cols-12 items-center justify-center w-full gap-3 md:gap-10">
                <div className="col-span-2 text-right">
                    <label>সেবার নাম:</label>
                </div>
                <div className="col-span-10">
                    <Selector />
                </div>
            </div>
        </div>
    );
}