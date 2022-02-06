import React,{useEffect, useState} from 'react';
import {ethers} from 'ethers';
import abi from './artifacts/contracts/Greeter.sol/Greeter.json';

import './App.css';
const greetingAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
// class App extends React.Component {
//   //// checkIfWalletisConnected() function checks if metamask is injected in the web browser
//   // const checkIfWalletisConnected = () =>
//   // {
//   //   const {ethereum} = window;
//   //   if(!ethereum)
//   //   {
//   //     alert("Metamask Object is not found");
//   //   }
//   //   else{
//   //     alert("Metamask is installed and the Ethereum Object is found!");
//   //     console.log(ethereum)
//   //   }
//   // }
//   // const [greeting,setGreetingValue] = useState("");
//   constructor(props){
//     super(props);
//     this.state = { greetingMessage: '' };
//   }
 
//   handleChange = event => {
//     this.setState({ greetingMessage: event.target.value });
//   };

//   // async function requestAccount(){
  
//   // }
  
//   // async function fetchGreeting(){
//   //   if(window.ethereum !== 'undefined')
//   //   {
//   //     const provider = new ethers.providers.Web3Provider(window.ethereum);
      
//   //     const contract = new ethers.Contract(greetingAddress,abi.abi,provider);
//   //     try{
//   //       const data =  await contract.greet();
//   //       console.log('data',data)
//   //     }
//   //     catch(err){
//   //       console.log(err)
//   //     }
//   //   }
//   // }

//   // async function setGreeting(){
//   //         const ETHAccounts = await window.ethereum.request({method:"eth_accounts"});
//   //         // console.log(ETHAccounts.length)
//   //         if(ETHAccounts.length ==0)
//   //         {
//   //           alert('No accounts is connected')
//   //         }
//   //     const provider = new ethers.providers.Web3Provider(window.ethereum);
//   //     const signer = provider.getSigner();
//   //     const contract = new ethers.Contract(greetingAddress,abi.abi,signer);
//   //     const transaction = await contract.setGreeting('greeting');
//   //     await transaction.wait();
//   //     fetchGreeting();
//   // }
//   useEffect(()=>{
//     // checkIfWalletisConnected();
//   },[])
//   return (
//     <div className="mainContainer">

//       <div className="dataContainer">
//         <div className="header">
//         👋 Hey, I am Agbo Boniface
//         </div>

//         <div className="bio">
//         I studying Solidity, Web3 & ReactJS right now.
//         </div>
//         <input type="text" name='greetingMessage'
//         // onChange={(e)=> setGreetingValue(e.target.value)}
//         value={this.state.greetingMessage}
//            onChange={this.handleChange}
//         />
//         <button className="waveButton" onClick={fetchGreeting}>
//           Wave at Me
//         </button>

//         <button className="waveButton" onClick={setGreeting}>
//           New greeting
//         </button>
//       </div>
//     </div>
//   );
// }

class App extends React.Component {
  const setDynamicComponent = async () =>{
  //   if(window.ethereum !== 'undefined')
  //   {
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
      
  //     const contract = new ethers.Contract(greetingAddress,abi.abi,provider);
  //     try{
  //       const data =  await contract.greet();
  //       console.log('data',data)
  //     }
  //     catch(err){
  //       console.log(err)
  //     }
  //   }
  // }

  // async function setGreeting(){
//   //         const ETHAccounts = await window.ethereum.request({method:"eth_accounts"});
//   //         // console.log(ETHAccounts.length)
//   //         if(ETHAccounts.length ==0)
//   //         {
//   //           alert('No accounts is connected')
//   //         }
//   //     const provider = new ethers.providers.Web3Provider(window.ethereum);
//   //     const signer = provider.getSigner();
//   //     const contract = new ethers.Contract(greetingAddress,abi.abi,signer);
//   //     const transaction = await contract.setGreeting('greeting');
//   //     await transaction.wait();
//   //     fetchGreeting();
  constructor(props){
    super(props);
    this.state = { username: '' };
  }
 
  handleChange = event => {
    this.setState({ username: event.target.value });
  };
 
  render() {
    return (
      <React.Fragment>
        <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        👋 Hey, I am Agbo Boniface
        </div>

        <div className="bio">
        I studying Solidity, Web3 & ReactJS right now.
        </div>
        <form>
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </form>
 
        <h3>Your username is: {this.state.username}</h3>
        <button className="waveButton" onClick={fetchGreeting}>
          Wave at Me
        </button>

        <button className="waveButton" onClick={setGreeting}>
          New greeting
        </button>
      </div>
    </div>
      </React.Fragment>
    );
  }
 }
export default App;
