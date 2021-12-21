import { useContext } from 'react/cjs/react.development'
import { TransactionContext } from '../context/transactionContext'
import './balanceRecord.css'
export default function BalanaceRecord() {
    const transactionContext=useContext(TransactionContext);
    console.log(transactionContext);
    return <>
    <div>
        <div><h2 className='h2'>Your Balance</h2></div>
        <div className='balanceDiv'>{transactionContext.transaction.income+transactionContext.transaction.expense}$</div>
    </div>
    <div className='incExpContainer d-flex justify-content-around'>
        <div><h3>Income</h3>
        <div>{transactionContext.transaction.income}$</div>
        </div>
        <div><h3>Expense</h3>
        <div>{transactionContext.transaction.expense}$</div>
        </div>
    </div>
   
    </>
}