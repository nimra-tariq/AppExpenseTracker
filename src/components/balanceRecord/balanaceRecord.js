import './balanceRecord.css'
export default function BalanaceRecord() {
    return <>
    <div>
        <div><h2 className='h2'>Your Balance</h2></div>
        <div className='balanceDiv'>0$</div>
    </div>
    <div className='incExpContainer d-flex justify-content-around'>
        <div><h3>Income</h3>
        <div>0$</div>
        </div>
        <div><h3>Expense</h3>
        <div>0$</div>
        </div>
    </div>
   
    </>
}