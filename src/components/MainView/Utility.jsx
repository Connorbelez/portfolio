import { BsPlusCircleFill } from 'react-icons/bs';
import { useState } from 'react';
import ChannelBar from './ChannelBar';




export const ContentContainer = (props) => {

    return (
      <div className='content-container'>
        {/* <TopNavigation /> */}
        <div className='content-list'>
        <Post
            name='Ada'
            timestamp='one week ago'
            text={props.text}
          />
        </div>
        <BottomBar />
      </div>
    );
  
  };


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
  
export default ContentContainer