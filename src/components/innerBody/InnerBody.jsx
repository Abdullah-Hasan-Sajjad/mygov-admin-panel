import React from "react";
import Dashcard from "../Dashcard";
import services from "../../data/services.json";
import FullSelectionPortion from "../FullSelectionPortion";
import Table from "../Table";
import abedon from "../../data/abedon.json"
import daak from "../../data/daak.json";
import nothi from "../../data/nothi.json";

export default function InnerBody() {
    return (
        <div className="flex flex-col bg-inner-body md:ml-64 h-full gap-4 p-4">
            <FullSelectionPortion />

            {/* Dashcard portion */}
            <div className="flex flex-row items-center gap-4">
                {
                    services.map((service, index) => {
                        return <Dashcard key={index} title={service.serviceName} value={service.value} />
                    })
                }
            </div>

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

            {/* Nothi Table */}
            <Table
                columnNames={[
                    "ক্রমিক",
                    "নথির নাম",
                    "নথির নম্বর",
                    "গৃহীত আবেদন",
                    "নিষ্পত্তিকৃত আবেদন",
                    "মোট আবেদন"
                ]}
                data={nothi} />

        </div>
    );
};