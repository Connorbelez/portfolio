import { BsPlusCircleFill } from 'react-icons/bs';
import { useState } from 'react';
import ChannelBar from './ChannelBar';
import { ContentContainer, BottomBar} from './Utility';
import { BG } from './HomePage';
import { ExampleComponent } from './TypeAnimation';

const MainContainer = (props) => {
  
    let cc = props.curComp
    console.log("curComp: "+cc);
    let theme = props.theme;
    let s = "<Connor Belenay/>"
    switch (cc){
      case "Home 💡":
        return (
          <div className='main-container h-screen' id="MC">
              <BG theme={theme}/>
              <div>
                <h1 className="absolute z-2 flex-center w-auto py-1 bottom-2/3 font-bold mt-0 mb-4 inset-x-0 font-mono dark:text-green-500 text-black text-5xl text-center leading-4"> {s} </h1>
                
              </div>
              <div className="absolute z-2 text-center w-full top-1/3  font-bold dark:text-white text-black text-3xl">
                <ExampleComponent />
              </div>
              
          </div>
      )
      case "t1 💡":
        return (
          <div className='main-container' id="MC">
              <ContentContainer text={cc}/>
          </div>
      )
      case "t2 💡":
        return (
          <div className='main-container' id="MC">
              <ContentContainer text={cc}/>
          </div>
      )
      case "t3 💡":
        return (
          <div className='main-container' id="MC">
              <ContentContainer text={cc}/>
          </div>
      )
      case "Settings 💡":
        return (
          <div className='main-container' id="MC">
              <ContentContainer text={cc}/>
          </div>
      )
      default:
        return (
          <div className='main-container' id="MC">
              <ContentContainer text={"HOME D"}/>
          </div>
      )
    }
};

export default MainContainer;
