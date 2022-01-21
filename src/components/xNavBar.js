

 function NavyBar(){
  return(
    <>
    <nav >
    <h1 className="h1">Navigation</h1>
      <div >
        <ul className="nav">
        <li >
        <a  href="https://github.com/">BadBank</a>
          </li>
          <li >
            <a  href="#/CreateAccount/">Create Account</a>
          </li>
          <li >
            <a  href="#/login/">Login</a>
          </li>
          <li >
            <a  href="#/deposit/">Deposit</a>
          </li>
          <li >
            <a  href="#/withdraw/">Withdraw</a>
          </li>
          <li >
            <a  href="#/balance/">Balance</a>
          </li>
          <li >
            <a  href="#/alldata/">AllData</a>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}