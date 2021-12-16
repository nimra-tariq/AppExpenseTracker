import './transactionHistory.css'
export default function TransactionHistory(){
    return<>
    <div><h1>History</h1></div>
    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">TransactionType</th>
      <th scope="col">Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Larry</td>
      <td>the Bird</td>
    </tr>
  </tbody>
</table>
<div><h2 >Add New Transaction</h2></div>
<div>
<form>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Add transaction description</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="transaction type" />
          <label htmlFor="formGroupExampleInput">Add amount</label>
          <input type="number" className="form-control" id="formGroupExampleInput" placeholder="amount" name="test_name" min="0" oninput="validity.valid||(value='');"></input>
          <button type="button" class="btn btn-info">Add Income</button>
          <button type="button" class="btn btn-info">Add Expense</button>
        </div>
      </form>
</div>
    </>
};