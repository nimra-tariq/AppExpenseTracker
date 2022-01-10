import { useContext } from 'react'
import { TransactionContext } from '../../context/transactionContext';
import './balanceRecord.css'
export default function BalanaceRecord() {
    const transactionContext=useContext(TransactionContext);
    return <div className="recordContainer">
    <div>
        <div><h2 className='h2 h2balRec'>Current Balance</h2></div>
        <div id="bal" className='balanceDiv balance'>{transactionContext.transaction.income+transactionContext.transaction.expense}.00$</div>
    </div>
    <div className='incExpContainer d-flex justify-content-around'>
        <div><h3 className='h3Heading'>Income</h3>
        <div id='inc' className="balance">{transactionContext.transaction.income}.00$</div>
        </div>
        <div><h3 className='h3Heading'>Expense</h3>
        <div id='exp' className="balance">{transactionContext.transaction.expense}.00$</div>
        </div>
    </div>
    </div>
}