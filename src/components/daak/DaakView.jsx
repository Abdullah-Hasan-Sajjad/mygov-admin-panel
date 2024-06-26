import React from "react";
import FullSelectionPortion from "../mainComponents/FullSelectionPortion";
import Table from "../mainComponents/Table";
import daak from "../../data/daak.json";
import DaakService from "./DaakService";


export default function DaakView() {
    return (
        <div className="flex flex-col bg-inner-body md:ml-64 h-full gap-4 p-4">
            <FullSelectionPortion label={"সেবার নাম:"} />

            {/* Dak Table */}
            <Table
                columnNames={[
                    "ক্রমিক",
                    "সেবার নাম",
                    "ডাকে চলমান",
                    "নথিতে চলমান",
                    "নিষ্পত্তিকৃত",
                    "মোট আবেদন"
                ]}
                data={daak} />
            <DaakService />

        </div>
    );
};