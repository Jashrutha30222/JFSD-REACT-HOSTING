import logo from './logo.svg';
import './App.css';
import Appbar from './components/Appbar.js';
import SignUp from './components/SignUp.js';
import SignIn from './components/SignIn.js';
import User from './components/User.js';
import Show from './components/Show.js';


function App({store}) {
  function Page(){
    switch(store.getState()){
      case "Signup":
        return (<div><Appbar store={store}/><SignUp /></div>)
      case "Signin":
        return (<div><Appbar store={store}/><SignIn store={store} /></div>)   
      case "User":
        if(localStorage.getItem("role")==1 || localStorage.getItem("role")==2)
        return (<div><Appbar store={store}/><User/></div>)  
        else 
        return (<div><Appbar store={store}/><SignIn store={store} /></div>)   
      case "Show":
        if(localStorage.getItem("role")==1 )
          return (<div><Appbar store={store}/><Show /></div>)
        else
        return (<div><Appbar store={store}/><SignIn store={store} /></div>)   


    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Feedback Management System</p>        
      </header>
      <div className='App-body'>
        <Page />
      </div>
    </div>
  );
}

export default App;