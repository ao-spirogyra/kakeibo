import React from 'react';
import Modal from 'react-modal';
import { Cell } from './Cell';
import '../css/TableModal.css';
import { useExpenseDetails } from '../hooks/useExpenseDetails';

interface TableModalProps{
  show: boolean,
  onCloseClicked: () => void,
  expenseId: number
}
export const TableModal: React.FC<TableModalProps> = ({show, onCloseClicked, expenseId}: {show, onCloseClicked, expenseId}) => {
  return (
    <Modal isOpen={show}
      ariaHideApp={false}>
      <button onClick={onCloseClicked}>close</button>
      <SubTable expenseId={expenseId}/>
    </Modal>
  );
};

interface SubTableProps {
  expenseId: number
}
const SubTable: React.FC<SubTableProps> = ({
  expenseId
}: {
  expenseId
}) => {
  const { titles, values } = useExpenseDetails(expenseId);
  if (titles === undefined || values === undefined) {
    return null;
  }
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
          values.map((eachValues, index) => {
            return (
              <div className='each-main-row' key={index}>
                {
                  eachValues.map((value) => {
                    return <Cell defaultValue={`${value}`} key={`${expenseId}-${value}`}/>;
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
