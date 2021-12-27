import { useContext } from 'react/cjs/react.development'
import { TransactionContext } from '../../context/transactionContext';
import './balanceRecord.css'
export default function BalanaceRecord() {
    const transactionContext=useContext(TransactionContext);
    return <div className="recordContainer">
    <div >
        <div><h2 className='h2 h2balRec'>Your Balance</h2></div>
        <div id="bal" className='balanceDiv balance'>{transactionContext.transaction.income+transactionContext.transaction.expense}$</div>
    </div>
    <div className='incExpContainer d-flex justify-content-around'>
        <div><h3>Income</h3>
        <div id='inc' className="balance">{transactionContext.transaction.income}$</div>
        </div>
        <div><h3>Expense</h3>
        <div id='exp' className="balance">{transactionContext.transaction.expense}$</div>
        </div>
    </div>
    </div>
}