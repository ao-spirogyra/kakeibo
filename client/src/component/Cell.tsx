import '../css/Cell.css';

interface CellProps {
  defaultValue?: string
  onCellClicked?: () => void
}

export const Cell: React.FC<CellProps> = ({
  defaultValue, onCellClicked
}: {
  defaultValue?, onCellClicked?
}) => {
  return (
    <div className='cell'>
      <input type='text' defaultValue={defaultValue} onClick={onCellClicked}/>
    </div>
  );
};
