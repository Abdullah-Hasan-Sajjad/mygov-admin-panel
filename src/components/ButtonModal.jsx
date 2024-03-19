import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

export default function ButtonModal({ btnText, headerShow, footerShow, children }) {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Button onClick={() => setOpenModal(true)}>{btnText}</Button>
            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>

                {headerShow ? <Modal.Header>Terms of Service</Modal.Header> : null}

                <Modal.Body>
                    {children}
                </Modal.Body>

                {footerShow ?
                    <Modal.Footer>
                        <Button onClick={() => setOpenModal(false)}>I accept</Button>
                        <Button color="gray" onClick={() => setOpenModal(false)}>
                            Decline
                        </Button>
                    </Modal.Footer>
                :null}
                
            </Modal>
        </>
    );
}
