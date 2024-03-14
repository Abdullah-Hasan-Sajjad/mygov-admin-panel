import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

export default function TestModal({text}) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <p onClick={() => setOpenModal(true)}>{text}</p>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header></Modal.Header>
        <Modal.Body>

          <div class="p-4" id="applicantQR">
            <div class="relative overflow-x-auto rounded-lg">
              <h2>আবেদনের রিসিট</h2>
              <div class="border-gray-300 border-b"></div>
              <div class="mt-4">
                <h2 class="text-md font-bold">ইউজার কপি</h2>
                <div class="border-gray-300 border-b"></div>
                <div class=" border-black border rounded mt-4 p-4">
                  <div class="text-center">
                    <img src="https://qr-application.dev.mygov.bd/images/government-of-bangladesh.png" class=" mx-auto" width="120" alt="government-of-bangladesh" />
                    <h3>গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</h3>
                    <h3>জেলা প্রশাসকের কার্যালয় ঢাকা</h3>
                    <h3>আবেদনের রশিদ</h3>
                  </div>
                  <div class="flex items-center justify-between mt-4 ">
                    <div class="w-2/3 ">
                      <h2>আবেদনের নাম: Service Name</h2>
                      <h2>আবেদন নম্বর: 212345</h2>
                      <h2>আবেদনকারীর নাম: <span id="applicantName">Applicant Name</span>
                      </h2>
                      <h2>মোবাইল নম্বর: <span id="applicantNumber">0124256</span>
                      </h2>
                      <h2>ইমেইল: <span id="applicantEmail">example@gmail.com</span>
                      </h2>
                    </div>
                    <div class="ml-auto">
                      QR
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-8 mb-6 border-t-2 border-dashed border-gray-400"></div>

              <div class="relative overflow-x-auto">
                <h2 class="text-md font-bold">অফিস কপি</h2>
                <div class="border-gray-300 border-b"></div>
                <div class=" border-black border rounded-lg mt-4 p-4">
                  <div class="text-center">
                    <img src="https://qr-application.dev.mygov.bd/images/government-of-bangladesh.png" class=" mx-auto" width="120" alt="government-of-bangladesh" />
                    <h3>গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</h3>
                    <h3>জেলা প্রশাসকের কার্যালয় ঢাকা</h3>
                    <h3>আবেদনের রশিদ</h3>
                  </div>
                  <div class="flex items-center justify-between mt-4 ">
                    <div class="w-2/3 ">
                      <h2>আবেদনের নাম: Service Name</h2>
                      <h2>আবেদন নম্বর: 212345</h2>
                      <h2>আবেদনকারীর নাম: <span id="applicantName">Applicant Name</span>
                      </h2>
                      <h2>মোবাইল নম্বর: <span id="applicantNumber">0124256</span>
                      </h2>
                      <h2>ইমেইল: <span id="applicantEmail">example@gmail.com</span>
                      </h2>
                    </div>
                    <div class="ml-auto">

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex pt-4 gap-4 justify-end">
              <Button onClick={() => setOpenModal(false)}>বাতিল করুন</Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>প্রিন্ট করুন</Button>
            </div>

          </div>

        </Modal.Body>

      </Modal>
    </>
  );
}
