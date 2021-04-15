import React, { useState } from 'react';
import '../css/Table.css';
import { TableModal } from './TableModal';
import { Cell } from './Cell';
import { useExpenses } from '../hooks/useExpenses';


export const Table: React.FC = () => {
  const { days, expenseTypes, contentOfCells } = useExpenses();
  if (contentOfCells === undefined) {
    return null;
  }  
  return (
    <div className='table'>
      <FirstColumn expenseTypes={expenseTypes}/>
      {
        days.map((day, index) => {
          return <Column day={day} key={day} contentOfCells={contentOfCells[index]}/>;
        })
      }
    </div>
  );
};

interface FirstColumnProps {
  expenseTypes: Array<string>
}
const FirstColumn: React.FC<FirstColumnProps> = ({expenseTypes}: {expenseTypes}) => {
  return (
    <div className='first-column'>
      <Cell/>
        {
          expenseTypes.map((expenseType) => {
            return (
              <Cell defaultValue={expenseType} key={expenseType}/>
            );
          })
        }
    </div>
    
  );
};
interface ColumnProps {
  day?: string,
  contentOfCells: Array<{
    totalPrice: number,
    expenseId: number
  }> | undefined
}

const Column: React.FC<ColumnProps> = ({
  day,
  contentOfCells
}: {
  day?,
  contentOfCells
}) => {
  const [showModal, setShowModal] = useState(false);
  const onCellClicked = () => {
    setShowModal(true);
  };
  const onCloseClicked = () => {
    setShowModal(false);
  };
  return (
    <div className='column'>
      <Cell defaultValue={day}/>
      {
        contentOfCells.map((eachContent) => {
          return (
            <>
              <Cell key={eachContent} defaultValue={eachContent.totalPrice} onCellClicked={onCellClicked}/>
              <TableModal show={showModal} onCloseClicked={onCloseClicked} expenseId={eachContent.expenseId} key={eachContent.expenseId}/>
            </>
          );
        })
      }
    </div>
  );
};


