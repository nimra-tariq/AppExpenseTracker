import './transactionHistory.css'
import { useContext } from 'react'
import { TransactionContext } from '../../context/transactionContext';
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

let buttnons=document.querySelectorAll('.btn-info');
function changeColor(event){
 for (let i = 0; i < buttnons.length; i++) {
 buttnons[i].classList.remove('applyColor')
 }
  let clickedBtn=event.target;
  clickedBtn.classList.add('applyColor');
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
    <div><h2 className="historyh2">History</h2></div>
    <table className="table table table-hover ">
  <thead className="thead-dark">
    <tr>
      <th scope="col"><h6>#</h6></th>
      <th scope="col"><h6>TransactionType</h6></th>
      <th scope="col"><h6>Amount</h6></th>
    </tr>
  </thead>
  <tbody id='tableBody'>
  </tbody>
</table>

<div className="balanceContainer">
<div><h2 className='h2Transaction'>Add New Transaction</h2></div>
<form>

        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Add transaction description</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="transaction type" />
          <label htmlFor="formGroupExampleInput">Add amount</label>
          <input  type="number" className="form-control" id="formGroupExampleInput" placeholder="amount" name="test_name"  min="0" onInput="validity.valid||(value='');"></input>
          <button type="button" className="btn btn-info" onClick={(event)=>
          {if(document.getElementsByTagName("input")[1].value!==''){transactionContext.dispatcher({type:'addIncome',value:document.getElementsByTagName("input")[1].value});addRecordToTable();changeColor(event)} else {toast.error('please enter an amount');changeColor(event)}}}>Add Income</button>
          <button type="button" className="btn btn-info" onClick={(event)=>
          {if(document.getElementsByTagName("input")[1].value!==''){transactionContext.dispatcher({type:'addExpense',value:document.getElementsByTagName("input")[1].value});addRecordToTable();changeColor(event)} else {toast.error('please enter an amount');changeColor(event)}}}>Add Expense</button>
        </div>
      
      </form>
</div>
    </>
};
