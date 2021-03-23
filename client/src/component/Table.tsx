import React, { useState } from 'react';
import '../css/Table.css';
import { TableModal } from './TableModal';
import { useExpenses } from '../hooks/useExpenses';


export const Table: React.FC = () => {
  const { days, expenseTypes, totalPrice } = useExpenses();
  if (!totalPrice || !totalPrice[0]) {
    return null;
  }
  return (
    <div className='table'>
      <FirstColumn expenseTypes={expenseTypes}/>
      {
        days.map((day, index) => {
          return <Column day={day} key={day} totalPrice={totalPrice[index]}/>;
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
  totalPrice: Array<number> | undefined
}

const Column: React.FC<ColumnProps> = ({
  day,
  totalPrice
}: {
  day?,
  totalPrice
}) => {
  
  return (
    <div className='column'>
      <Cell defaultValue={day}/>
      {
        totalPrice.map((price) => {
          return <Cell key={price} defaultValue={price}/>;
        })
      }
    </div>
  );
};

interface CellProps {
  defaultValue?: string
}

const Cell: React.FC<CellProps> = ({defaultValue}: {defaultValue?}) => {
  const [showModal, setShowModal] = useState(false);
  const onCellClicked = () => {
    setShowModal(true);
  };
  const onCloseClicked = () => {
    setShowModal(false);
  };
  const renderCell = () => {
    return (
      <input type="text" defaultValue={defaultValue} onClick={onCellClicked}/>
    );
  };

  return (
    <div className='cell'>
      {
        renderCell()
      }
      {
        <TableModal show={showModal} onCloseClicked={onCloseClicked}/>
      }
    </div>
  );
};

