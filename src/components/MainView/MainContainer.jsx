import { BsPlusCircleFill } from 'react-icons/bs';
import { useState } from 'react';
import ChannelBar from './ChannelBar';
import { ContentContainer, BottomBar} from './Utility';
import { BG } from './HomePage';

const MainContainer = (props) => {
  
    let cc = props.curComp
    console.log("curComp: "+cc);

    switch (cc){
      case "Home 💡":
        return (
          <div className='main-container h-screen' id="MC">
              <BG />
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
