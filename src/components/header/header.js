import "./header.css"
export default function Header(){
    return <div>
    <img id="logoImg" src={process.env.PUBLIC_URL + '/logoExpenseTracker.png  '} alt="logo"/>
    <h1 className="h1Exp">Expense Tracker</h1>
    </div>
}