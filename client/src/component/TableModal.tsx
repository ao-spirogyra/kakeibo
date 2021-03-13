import React from 'react';
import Modal from 'react-modal';

interface TableModalProps{
  show: boolean,
  onCloseClicked: () => void 
}
export const TableModal: React.FC<TableModalProps> = ({show, onCloseClicked}: {show, onCloseClicked}) => {
  return (
    <Modal isOpen={show}>
      <button onClick={onCloseClicked}>close</button>
    </Modal>
  );
};
