import React from "react";
import Dashcard from "../Dashcard";
import services from "../../data/services.json";

export default function InnerBody(){
    return(
        <div className="flex items-center justify-between bg-inner-body md:ml-64 h-full gap-4 p-4">  
            {
               services.map((service, index)=>{
                return <Dashcard title={service.serviceName} value={service.value}/>
               })
            }
        </div>
    );
};