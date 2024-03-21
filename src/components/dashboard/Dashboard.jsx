import React from "react";
import Dashcard from "./Dashcard";
import services from "../../data/services.json";
import FullSelectionPortion from "../mainComponents/FullSelectionPortion";


export default function InnerBody() {
    return (
        <div className="flex flex-col bg-inner-body md:ml-64 h-full gap-4 p-4">
            <FullSelectionPortion label={"সেবার নাম:"}/>

            {/* Dashcard portion */}
            <div className="flex flex-row items-center gap-4">
                {
                    services.map((service, index) => {
                        return <Dashcard key={index} title={service.serviceName} value={service.value} />
                    })
                }
            </div>

        </div>
    );
};