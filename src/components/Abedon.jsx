import React from "react";
import FullSelectionPortion from "./FullSelectionPortion";
import Table from "./Table";
import abedon from "../data/abedon.json"

export default function Abedon() {
    return (
        <div className="flex flex-col bg-inner-body md:ml-64 h-full gap-4 p-4">
            <FullSelectionPortion label={"সেবার নাম:"}/>

            {/* Abedon Table */}
            <Table
                columnNames={[
                    "ক্রমিক",
                    "সেবার নাম",
                    "অপেক্ষমান ",
                    "ডাকে চলমান",
                    "নথিতে চলমান",
                    "নিষ্পত্তিকৃত",
                    "মোট আবেদন"
                ]}
                data={abedon} />

        </div>
    );
};