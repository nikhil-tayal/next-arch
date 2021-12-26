import Modal from 'react-modal';
// @ts-ignore
import { MdCancel } from 'react-icons/md';

Modal.setAppElement('#modal-root');
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
interface ModalTypes {
  children: React.ReactChild | React.ReactChild[];
  closeModal: () => {} | void;
  isModalOpen: boolean;
  title?: string;
  modalClass?: string;
  headerClass?: string;
  bodyClass?: string;
}
export default function Index({
  children,
  closeModal,
  isModalOpen,
  title,
  modalClass,
  headerClass,
  bodyClass,
}: ModalTypes) {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      className={`p-0 absolute rounded-xl outline-none shadow-xl w-6/12 bg-white ${modalClass} overflow-y-auto overflow-x-auto`}
      overlayClassName='bg-darkBlue fixed top-0 right-0 left-0 bottom-0 bg-opacity-50'
    >
      <div
        id='modal-header'
        className={`border-b px-4 border-outlineGray py-3 relative ${headerClass}`}
      >
        <div className='text-darkBlue font-medium text-xl'>{title}</div>
        <MdCancel
          className='absolute right-10 top-4 text-red cursor-pointer'
          size={24}
          onClick={closeModal}
        />
      </div>
      <div className={`px-4 py-2 ${bodyClass}`}>{children}</div>
    </Modal>
  );
}