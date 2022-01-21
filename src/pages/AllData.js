import React from 'react';
const UserContext = React.createContext(null);


export default function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <>
    <h5>All Data in Store</h5>
     {JSON.stringify(ctx)} 
    <br/>
    </>
  );
}
