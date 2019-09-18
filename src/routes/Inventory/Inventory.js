import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { PageContext } from '../../context/Context';
import AddDeviceForm from '../../components/AddDeviceForm/AddDeviceForm';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

function Inventory() {
  const [page, setCurrentPage] = useContext(PageContext);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    function setPage() {
      setCurrentPage(false);
    }

    setPage(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  function handleAddDeviceClick() {
    openModal();
  }

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div>
      <h1>Device Inventory</h1>
      <button onClick={handleAddDeviceClick}>Add Device</button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add Device"
        closeTimeoutMS={2000}
      >
        <AddDeviceForm />
      </Modal>
    </div>
  );
}

export default Inventory;
