import React from "react";
import FullSelectionPortion from "../FullSelectionPortion";
import Table from "../Table";
import nothi from "../../data/nothi.json";
import ButtonModal from "../ButtonModal";
import CreateNothi from "./CreateNothi";


export default function NathiView() {
    return (
        <div className="flex flex-col bg-inner-body md:ml-64 h-full gap-4 p-4">
            
            <FullSelectionPortion label={"সেবার নাম:"}/>

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

            <ButtonModal btnText={"নথি তৈরি করুন"} headerShow={false} footerShow={false}> <CreateNothi /> </ButtonModal>
           
        </div>
    );
};