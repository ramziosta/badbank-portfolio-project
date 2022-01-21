import React from "react";
import { BrowserRouter as HashRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AllData from "./pages/AllData";
import Withdraw from "./pages/Withdraw";
import Deposit from "./pages/Deposit";
import Balance from "./pages/Balance";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import Dropdown from "./components/Dropdown";
import AccountInfo from "./pages/AccountInfo";
import SignIn from "./pages/SignIn";
import CreditCards from "./pages/CreditCards";
import Savings from "./pages/Savings";
import "./App.css";

const UserContext = React.createContext(null);

export default function Spa() {
  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider
        value={{
          users: [
            {
              name: "abel",
              email: "abel@mit.edu",
              password: "secret",
              balance: 100,
            },
          ],
        }}
      >
        <Routes className="container" style={{ padding: "20px" }}>
          <Route path="/" exact element={<Home />} />
          <Route path="/CreateAccount/" element={<CreateAccount />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/deposit/" element={<Deposit />} />
          <Route path="/transaction" element={<Dropdown />} />
          <Route path="/AccountInfo" element={<AccountInfo />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Savings" element={<Savings />} />
          <Route path="/creditcards" element={<CreditCards/>} />
          <Route path="/balance/" element={<Balance />} />
          <Route path="/withdraw/" element={<Withdraw />} />
          <Route path="/alldata/" element={<AllData />} />
        </Routes>
      </UserContext.Provider>
    </HashRouter>
  );
}
