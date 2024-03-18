import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

export default function AbedonStatusModal({text, abedonStatus}) {  
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <p onClick={() => setOpenModal(true)}>{text}</p>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header></Modal.Header>
        <Modal.Body>

        <div className="my-2 ">

            <div className="relative">
                <div className="overflow-y-auto" id="applicationSection" >

                    {abedonStatus.map((data, index) => (
                        <div className="px-6">
                            <div className="relative rounded-lg ">

                                <div className="flex justify-between">
                                    <div>
                                        <h1 className="text-2xl py-2 text-gray-700">আবেদনের অবস্থা </h1>
                                    </div>
                                    <div className="applicationCloseBtn">
                                        <i className="fas fa-times-circle text-3xl text-red-600" ></i>
                                    </div>
                                </div>

                                <div className="border-black border-b"></div>

                                <div className=" mt-2 applicationStatus" id="applicationSection">

                                    <div className="mt-1 px-6 py-3 flex justify-center">
                                        <div className="w-10/12 application-status-bar">
                                            <div className=" flex justify-between">
                                                <div className="application-collect w-1/4 flex flex-col items-center">
                                                    <div
                                                    className={data.AbedonAccepted && data.AbedonAccepted.length > 0 ? "bg-yellow-200 p-4 rounded-full w-4" : "bg-gray-500 p-4 rounded-full w-4"}
                                                    ></div>
                                                    <div className="mt-2">
                                                        <h1 className="text-center">আবেদন গৃহীত</h1>
                                                    </div>
                                                </div>
                                                <div className="application-collect w-1/4 flex flex-col items-center">
                                                    <div 
                                                    className={data.Daak && data.Daak.length ? "bg-blue-400 p-4 rounded-full w-4" : "bg-gray-500 p-4 rounded-full w-4"}></div>
                                                    <div className="mt-2">
                                                        <h3 className="text-center">কার্যক্রম চলমান</h3>
                                                    </div>
                                                </div>
                                                <div className="application-collect w-1/4 flex flex-col items-center">
                                                    <div
                                                    className={data.Nisponno && data.Nisponno.length ? "bg-green-400 p-4 rounded-full w-4" : "bg-gray-500 p-4 rounded-full w-4"}></div>
                                                    <div className="mt-2">
                                                        <h3 className="text-center">নিস্পন্ন</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {data.generalInfo.map((generalInfo) => (
                                        <div className="px-6 pb-2">
                                            <div className="flex items-center justify-between mt-4 ">
                                                <div className="w-2/3 ">
                                                    <h2>আবেদনের নাম:<span id="applicationServiceName">{generalInfo.ServiceName}</span></h2>
                                                    <h3>আবেদন নম্বর:<span id="applicationServiceNo">{generalInfo.ServiceNumber}</span></h3>
                                                    <h3>আবেদনকারীর নাম:<span id="applicantName">{generalInfo.ApplicantName}</span></h3>
                                                    <h3>মোবাইল নম্বর:<span id="applicantNumber">{generalInfo.ApplicantMobileNo}</span></h3>
                                                    <h3>ই-মেইল:<span id="applicantEmail">{generalInfo.ApplicantEmail}</span></h3>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    <div className="border-t-2 border-dashed border-gray-400"></div>

                                    <div className="pt-3">
                                        <h1 className="text-2xl"><i className="fas fa-layer-group text-green-700 text-3xl"></i> &nbsp;&nbsp;কার্যক্রম চিত্র</h1>

                                        <div className="subSection ">

                                            {data.AbedonAccepted && data.AbedonAccepted.length > 0 && (data.AbedonAccepted.map((item, idx) => (
                                                <div id="applicationCollect" className="pl-2 pt-2">
                                                    <div className="flex flex-column">
                                                        <div className="circle-container pr-2">
                                                            <div className="rounded-full p-1 border-2 border-yellow-400">
                                                                <div className="rounded-full p-2 bg-yellow-200"></div>

                                                            </div>
                                                        </div>
                                                        <div key={idx}>
                                                            <h3 className="text-lg">আবেদন গৃহীত হয়েছে</h3>

                                                            <p className="text-xs">ডেস্কঃ <span id="FUReceiver">{item.Desk}</span></p>
                                                            <p className="text-xs">ডেস্ক গ্রহণের তারিখঃ <span id="applicationStartDate">{item.DeskAcceptanceDate}</span></p>
                                                            <p className="text-xs">ডেস্ক নিস্পন্নের তারিখঃ <span id="applicationEndDate">{item.DeskNishponnoDate}</span></p>

                                                        </div>
                                                    </div>
                                                </div>
                                            )))}

                                            {data.Daak && data.Daak.length ?
                                                <div id="nothiCollect" className="pl-2 pt-3">
                                                    <div className="flex flex-column">
                                                        <div className="circle-container pr-2">
                                                            <div className="rounded-full p-1 border-2 border-blue-400">
                                                                <div className="rounded-full p-2 bg-blue-400"></div>

                                                            </div>

                                                        </div>

                                                        <div>
                                                            <div>
                                                                <h3 className="text-lg">ডাকে উপস্থাপিত</h3>
                                                            </div>
                                                            {data.Daak && data.Daak.length && (data.Daak.map((item, idx) => (
                                                                <div className="border-l pl-4  border-dashed border-gray-400" key={idx}>

                                                                    <div id="dakDdata" class="userInfoBorder">
                                                                        <p className="text-xs">ডেস্কঃ
                                                                            <span>{item.Desk}</span>
                                                                        </p>

                                                                        <p className="text-xs">ডেস্ক গ্রহণের তারিখঃ
                                                                            <span>{item.DeskAcceptanceDate}</span>
                                                                        </p>

                                                                        <div className="border-t-2 border-dashed border-gray-400"></div>

                                                                    </div>

                                                                </div>
                                                            )))}
                                                        </div>
                                                    </div>
                                                </div>
                                            :null}

                                            {data.Nathi && data.Nathi.length ?
                                                <div id="approvalCollect" class="pl-2 pt-3">
                                                    <div className="flex flex-column">
                                                        <div className="circle-container md:pr-2 sm:hidden md:block">
                                                            <div className="rounded-full p-1 border-2 border-green-400">
                                                                <div className="rounded-full p-2 bg-green-400"></div>

                                                            </div>

                                                        </div>

                                                        <div><h3 className="text-lg">নথিতে উপস্থাপিত</h3>{data.Nathi && data.Nathi.length ? data.Nathi.map((item, idx) => (

                                                            <div id="nothiInfoData" className="border-l pl-4  border-dashed border-gray-400" key={idx}>
                                                                <p className="text-xs">ডেস্কঃ
                                                                    <span>{item.Desk}</span>
                                                                </p>
                                                                <p className="text-xs">ডেস্ক গ্রহণের তারিখঃ
                                                                    <span>{item.DeskAcceptanceDate}</span>
                                                                </p>
                                                            </div>

                                                        )) 
                                                        :null
                                                        }

                                                        </div>

                                                    </div>
                                                </div>
                                            :null}

                                            {data.Nisponno && data.Nisponno.length ?
                                                <div id="emptyApplication" className="pl-2 pt-3">
                                                    <div className="flex flex-column">
                                                        <div className="circle-container md:pr-2 sm:hidden md:block">
                                                            <div className="rounded-full p-1 border-2 border-green-400">
                                                                <div className="rounded-full p-2 bg-green-400"></div>

                                                            </div>
                                                        </div>

                                                        <div>
                                                            <h3 className="text-lg">নিষ্পন্ন</h3>
                                                            {data.Nisponno && data.Nisponno.length && (data.Nisponno.map((item, idx) => (
                                                                <div key={idx}>
                                                                    <p className="text-xs">ডেস্কঃ
                                                                        <span id="approvalUser">{item.Desk}</span>
                                                                    </p>
                                                                    <p className="text-xs">ডেস্ক নিস্পন্নের তারিখঃ
                                                                        <span id="nishponnoDate">{item.DeskAcceptanceDate}</span>
                                                                    </p>
                                                                </div>
                                                            )))}
                                                        </div>
                                                    </div>
                                                </div>
                                            :null}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            <div class="flex pt-4 gap-4 justify-end">
              <Button onClick={() => setOpenModal(false)}>বাতিল করুন</Button>
            </div>

        </div>

        </Modal.Body>

      </Modal>
    </>
  );
}
