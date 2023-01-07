import { BsPlusCircleFill } from 'react-icons/bs';
import { useState } from 'react';
import ChannelBar from './ChannelBar';
import { ContentContainer, BottomBar} from './Utility';
import { BG } from './HomePage';

const MainContainer = (props) => {
  
    let cc = props.curComp
    console.log("curComp: "+cc);
    let theme = props.theme;
    switch (cc){
      case "Home 💡":
        return (
          <div className='main-container h-screen' id="MC">
              <BG theme={theme}/>
              <h1 className="absolute w-full py-2.5 top-10 inset-x-0 dark:text-white text-black text-xl text-center leading-4">Connor Beleznay</h1>
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
