import { useState } from "react";
import Select from "react-tailwindcss-select";

const options = [
    { value: "fox", label: "🦊 Fox" },
    { value: "Honeybee", label: "🐝 Honeybee" }
];

const Selector = () => {
    const [selectedService, setService] = useState(null);

    const handleChange = value => {
        //console.log("value:", value);
        setService(value);
    };

    return (
        <Select
            placeholder={"সেবা বাছাই করুন..."}
            searchInputPlaceholder={"সেবা খুজুন..."}
            isSearchable={true}
            value={selectedService}
            onChange={handleChange}
            options={options}
        />
    );
};

export default Selector;