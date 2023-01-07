
import './App.css';
import SideBar from './components/SideBar/SideBar';
import MainContainer from './components/MainView/MainContainer';
import {useState} from 'react';

// const PageSwitchHandler = () => {
//   const [componentToShow, setComponentToShow] = useState("home");

// }

function App() {
  const [componentToShow, setComponentToShow] = useState("Home 💡");
  const pageSwitchHandler = (newVal) => {
    console.log("PAGE SWITCH HANDLER! :" + newVal );
    
    if(newVal !== componentToShow){
      setComponentToShow(newVal);
    }else{
      console.log("SAME AS BEFORE SKIPPING!");
    }
  }

  return (
    <div className="flex h-screen">
      <SideBar pshOnClick={pageSwitchHandler} curComp={componentToShow}/>
      <MainContainer curComp={componentToShow}/>
    </div>
  );
}

export default App;
