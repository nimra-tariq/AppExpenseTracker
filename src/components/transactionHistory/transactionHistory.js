import './transactionHistory.css'
import { useContext } from 'react'
import { TransactionContext } from '../context/transactionContext'
import react,{useState} from 'react';
import { toast } from 'react-toastify';
export default function TransactionHistory(){

const transactionContext=useContext(TransactionContext);
const [count, setCount]=useState(0);


function addRecordToTable(){
  setCount(count+1);
let row=document.createElement('tr');
let countCol=document.createElement('th');
countCol.innerHTML=count;
let transTypeCol=document.createElement('td')
transTypeCol.innerHTML=document.getElementsByTagName("input")[0].value;
let amountCol=document.createElement('td');
amountCol.innerHTML=document.getElementsByTagName("input")[1].value;
row.append(countCol,transTypeCol,amountCol);
document.getElementById('tableBody').append(row);
}

// function dispatchAmount(){
//   transactionContext.dispatcher({type:'addIncome',value:document.getElementsByTagName("input")[1].value});
// }

// function validateAmount(){
//   if(document.getElementsByTagName("input")[1].value!=='')
//   {
//     dispatchAmount();
//     addRecordToTable();
//   }
//   else
//   toast.error('please enter an amount')
// }
    return<>
    <div><h1>History</h1></div>
    <table className="table table table-hover ">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">TransactionType</th>
      <th scope="col">Amount</th>
    </tr>
  </thead>
  <tbody id='tableBody'>
  </tbody>
</table>
<div><h2 >Add New Transaction</h2></div>
<div>
<form>
  
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Add transaction description</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="transaction type" />
          <label htmlFor="formGroupExampleInput">Add amount</label>
          <input  type="number" className="form-control" id="formGroupExampleInput" placeholder="amount" name="test_name"  min="0" oninput="validity.valid||(value='');"></input>
          <button type="button" class="btn btn-info" onClick={()=>
            {if(document.getElementsByTagName("input")[1].value!==''){transactionContext.dispatcher({type:'addIncome',value:document.getElementsByTagName("input")[1].value});addRecordToTable()} else {toast.error('please enter an amount')}}}>Add Income</button>
          <button type="button" class="btn btn-info" onClick={()=>
          {if(document.getElementsByTagName("input")[1].value!==''){transactionContext.dispatcher({type:'addExpense',value:document.getElementsByTagName("input")[1].value});addRecordToTable()} else {toast.error('please enter an amount')}}}>Add Expense</button>
        </div>
      
      </form>
</div>
    </>
};
