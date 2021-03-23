import React from 'react';
import Modal from 'react-modal';
import { Cell } from './Cell';
import '../css/TableModal.css';
import { useExpenseDetails } from '../hooks/useExpenseDetails';

interface TableModalProps{
  show: boolean,
  onCloseClicked: () => void 
}
export const TableModal: React.FC<TableModalProps> = ({show, onCloseClicked}: {show, onCloseClicked}) => {
  return (
    <Modal isOpen={show}
      ariaHideApp={false}>
      <button onClick={onCloseClicked}>close</button>
      <SubTable/>
    </Modal>
  );
};

const SubTable: React.FC = () => {
  const { titles, values } = useExpenseDetails();
  return (
    <div className='sub-table'>
      <div className='title-row'>
        {
          titles.map((title) => {
            return <Cell defaultValue={title} key={title}/>;
          })
        }
      </div>
      <div className='main-row'>
        {
          values.map((value) => {
            return (
              <div className='each-main-row'key={value}>
                {
                  titles.map((title) => {
                    return <Cell defaultValue={`${value}+${title}`} key={`${value}+${title}`}/>;
                  })
                }
              </div>
            );
          })
        }
      </div>
    </div>
  );
};
