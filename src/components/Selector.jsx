import { useState } from "react";
import Select from "react-tailwindcss-select";

const options = [
    { value: "fox", label: "🦊 Fox" },
    { value: "Honeybee", label: "🐝 Honeybee" }
];

export default function Selector({placeholder, searchInputPlaceholder}){
    
    const [selectedService, setService] = useState(null);

    const handleChange = value => {
        //console.log("value:", value);
        setService(value);
    };

    return (
        <Select
            //placeholder={"সেবা বাছাই করুন..."}
            placeholder={placeholder}
            searchInputPlaceholder={searchInputPlaceholder}
            //searchInputPlaceholder={"সেবা খুজুন..."}
            isSearchable={true}
            value={selectedService}
            onChange={handleChange}
            options={options}
        />
    );
}