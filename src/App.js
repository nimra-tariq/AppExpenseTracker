import Header from "./components/header/header";
import BalanaceRecord from "./components/balanceRecord/balanaceRecord";
import TransactionHistory from "./components/transactionHistory/transactionHistory";
import Footer from "./components/footer/footer";
import { useReducer } from "react";
import { TransactionContext } from "./context/transactionContext";
import { myReducer } from "./reducer/reducer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const initialState = {
  income: 0.00,
  expense: 0.00,
};
function App() {
  const [state, dispatch] = useReducer(myReducer, initialState);

  return (
    <>
      <TransactionContext.Provider
        value={{ transaction: state, dispatcher: dispatch }}
      >
        <div className="containerDiv">
          <Header></Header>
          <BalanaceRecord></BalanaceRecord>
          <TransactionHistory></TransactionHistory>
          <Footer></Footer>
        </div>
      </TransactionContext.Provider>
      <ToastContainer/>
    </>
  );
}

export default App;
