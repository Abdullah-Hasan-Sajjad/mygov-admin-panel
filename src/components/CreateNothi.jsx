import { Button, Label, TextInput } from 'flowbite-react';
import Selector from './Selector';
import { useState } from 'react';

export default function CreateNothi(){
const [dept, setDept] = useState("ministry");

return (
    <div className="relative px-3 py-4 border border-black rounded-md">
        <div className="absolute bg-white top-[-12px] left-5 px-2">
            <span className="font-bold">নথি তৈরি</span>
        </div>
        
        <form className="flex max-w flex-col gap-4">

            <div className="flex flex-wrap md:flex-row justify-between items-center gap-4">
                <div className='grow'>
                    <div className="mb-2 block">
                        <Label htmlFor="" value="নথি সেবা সমূহ" />
                    </div>
                    <Selector placeholder={"সেবা নির্বাচন করুন"} searchInputPlaceholder={"সেবা খুজুন..."} />
                </div>

                <div className='grow'>
                    <div className="mb-2 block">
                        <Label htmlFor="" value="নথির নাম" />
                    </div>
                    <TextInput id="" type="" placeholder="নথির নাম" />
                </div>
            </div>

            <div className="flex flex-wrap md:flex-row justify-between items-center gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="" value="নথির শ্রেণী" />
                    </div>
                    <Selector placeholder={"নথির শ্রেণী নির্বাচন করুন"} searchInputPlaceholder={"সেবা খুজুন..."} />
                </div>

                <div className='grow'>
                    <div className="mb-2 block">
                        <Label htmlFor="" value="নথির শাখা" />
                    </div>
                    <TextInput id="" type="" placeholder="নথির শাখা" />
                </div>
            </div>

            <div className="flex flex-wrap md:flex-row justify-between items-center gap-4">
                <div className='grow'>
                    <div className="mb-2 block">
                        <Label htmlFor="" value="নথির ধরন(মাইগভ)" />
                    </div>
                    <TextInput id="" type="" placeholder="নথির ধরন" />
                </div>

                <div className='grow'>
                    <div className="mb-2 block">
                        <Label htmlFor="" value="নথির নম্বর" />
                    </div>
                    <TextInput id="" type="" placeholder="নথির নম্বর" />
                </div>
            </div>


            <div className="flex ">
                <div className={dept === "ministry" ? "mx-2 border-b-4 border-orange-600 cursor-pointer" : "mx-2 cursor-pointer"} id="ministryWise" onClick={() => setDept("ministry")}>
                    <p className="font-bold text-xs  text-blue-800 pb-2">মন্ত্রণালয় অনুসারে</p>
                </div>
                <div id="doptorWise" className={dept === "doptor" ? "mx-2 border-b-4 border-orange-600 cursor-pointer" : "mx-2 cursor-pointer"} onClick={() => setDept("doptor")}>
                    <p className="font-bold text-xs text-blue-800">নিজ দপ্তর অনুসারে</p>
                </div>
            </div>

            {dept === "ministry" ?

                // Ministry portion 
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="" value="মন্ত্রণালয়" />
                    </div>
                    <Selector placeholder={"বাছাই করুন"}
                        searchInputPlaceholder={"খুজুন..."} />
                </div>

                ://Doptor portion
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="" value="দপ্তর" />
                    </div>
                    <Selector placeholder={"বাছাই করুন"}
                        searchInputPlaceholder={"খুজুন..."} />
                </div>
            }


            <Button type="submit">নথি তৈরি করুন</Button>
        </form>
    </div>
);
}