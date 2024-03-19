import { BiArchive } from "react-icons/bi";
import AbedonModal from "./AbedonModal";
import AbedonStatusModal from "./AbedonStatusModal";
import abedonStatusData from "../data/abedon_status.json";

export default function DaakService() {
    return (
        <div className="p-4 sm:p-6 bg-white shadow sm:rounded-lg">
            <div className="flex justify-between gap-4">
                <div className="relative overflow-x-auto sm:rounded-lg w-8/12">

                    <table className="w-full text-sm text-gray-500">

                        <thead className="text-xs text-gray-700 uppercase">
                            <tr>
                                <th scope="col" className="px-6 py-3 bg-gray-50">
                                    ক্রমিক
                                </th>
                                <th scope="col" className="px-6 py-3 text-left bg-gray-50">
                                    আবেদনকারীর তথ্য
                                </th>
                                <th scope="col" className="px-6 py-3 bg-gray-50">
                                    আবেদন গ্রহণের তারিখ
                                </th>
                                <th scope="col" className="px-6 py-3 bg-gray-50">
                                    অ্যাকশন
                                </th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                abedonStatusData.map((data, index) => {
                                    return (
                                        <tr className="border-b border-gray-200">
                                            <td className="px-6 py-4 text-center">{index+1}</td>

                                            {
                                                data.generalInfo.map((generalInfo, idx) => {
                                                    return (
                                                        <td className="px-6 py-4">
                                                            <span className="block">নাম: {generalInfo.ServiceName}</span>
                                                            <span className="block">মোবাইল নম্বর: {generalInfo.ApplicantMobileNo}</span>
                                                            <span className="block">আবেদন নম্বর: {generalInfo.ServiceNumber}</span>
                                                        </td>
                                                    )
                                                })
                                            }

                                            {
                                                data.generalInfo.map((generalInfo, idx) => {
                                                    return (
                                                        <td className="px-6 py-4 text-center">{generalInfo.AbedonAcceptDate}</td>
                                                    )
                                                })
                                            }

                                            <td className="px-6 py-4 text-center">

                                                <div x-data="">
                                                    <a className="flex flex-wrap gap-2 items-center w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out cursor-pointer" id="applicationStatusModal_1">
                                                        <div><BiArchive /></div>
                                                        <div><AbedonModal text={"আবেদনের রিসিট"} /></div>

                                                    </a>
                                                </div>

                                                <div x-data="">
                                                    <a className="flex flex-wrap gap-2 items-center w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out cursor-pointer" id="applicationStatusModal_1">
                                                        <div><BiArchive /></div>
                                                        <AbedonStatusModal text={"আবেদনের বিস্তারিত"} abedonStatus={abedonStatusData[index]} />
                                                    </a>
                                                </div>

                                            </td>

                                        </tr>
                                    );
                                })
                            }

                            

                        </tbody>

                    </table>

                </div>
            </div>
        </div>
    );
};