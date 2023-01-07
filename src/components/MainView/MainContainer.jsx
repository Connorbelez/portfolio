import { BsPlusCircleFill } from 'react-icons/bs';
import { useState } from 'react';
import ChannelBar from './ChannelBar';

const ContentContainer = () => {
  return (
    
    <div className='content-container'>
      {/* <TopNavigation /> */}
      <div className='content-list'>
       
      </div>
      <BottomBar />
    </div>
  );
};

const MainContainer = () => {
  const [componentToShow, setComponentToShow] = useState("home");
  
    return (
        <div className='main-container' id="MC">
            <ContentContainer />
        </div>
    )
}

const BottomBar = () => (
  <div className='bottom-bar'>
    <PlusIcon />
    <input type='text' placeholder='Enter message...' className='bottom-bar-input' />
  </div>
);

const Post = ({ name, timestamp, text }) => {

  const seed = Math.round(Math.random() * 100);
  return (
    <div className={'post'}>
      <div className='avatar-wrapper'>
        <img src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`} alt='' className='avatar' />
      </div>

      <div className='post-content'>
        <p className='post-owner'>
          {name}
          <small className='timestamp'>{timestamp}</small>
        </p>
        <p className='post-text'>{text}</p>
      </div>
    </div>
  );
};

const PlusIcon = () => (
  <BsPlusCircleFill
    size='22'
    className='text-green-500 dark:shadow-lg mx-2 dark:text-primary'
  />
);

export default MainContainer;
