import Header from './components/header/header';
import BalanaceRecord
 from './components/balanceRecord/balanaceRecord';
 import TransactionHistory from './components/transactionHistory/transactionHistory';
import './App.css';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
  <div className='containerDiv'>
 <Header></Header>
 <BalanaceRecord></BalanaceRecord>
 <TransactionHistory></TransactionHistory>
 <Footer></Footer>
  </div>
  </>
  );
}

export default App;
