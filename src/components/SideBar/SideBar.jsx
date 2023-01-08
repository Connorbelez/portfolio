import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import {RiContactsLine} from 'react-icons/ri'
import {
    FaFire,
    FaPoo,
    FaInfo,
    FaSearch,
    FaHashtag,
    FaRegBell,
    FaUserCircle,
    FaMoon,
    FaSun,
  } from 'react-icons/fa';

  import {FiInfo } from 'react-icons/fi'
  
import useDarkMode from '../../hooks/useDarkMode';
  
const SideBar = (props) => {
    return (
        <div className="fixed top-0 h-screen w-16 
                        flex flex-col
                        bg-gray-100 text-gray-900  
                        dark:bg-gray-900 dark:text-white 
                        shadow-lg">
        <SideBarIcon className='z-1' icon={<FaFire size="28" />} text={"Home 💡"} callBack={props.pshOnClick}/>
        <Divider />
        <SideBarIcon icon={<FiInfo size="30" />} text={"About Me 💡"} callBack={props.pshOnClick}/>
        <SideBarIcon icon={<BsFillLightningFill size="20" />} text={"t2 💡"} callBack={props.pshOnClick}/>
        <SideBarIcon icon={<BsFillLightningFill size="20" />} text={"t3 💡"} callBack={props.pshOnClick}/>
        <Divider />
        <SideBarIcon icon={<BsGearFill size="22" />} text={"Settings 💡"} callBack={props.pshOnClick} />
        {/* <SideBarIcon icon={ThemeIcon} /> */}
        <ThemeIcon theme={props.theme} setTheme={props.setTheme} text={"Theme"}/>
        </div>
    )
}; 

const ThemeIcon = (props) => {
    // const [darkTheme, setDarkTheme] = useDarkMode();
    let darkTheme = props.theme 

    const handleMode = () => props.setTheme(!darkTheme);
    return (
        <div className="sidebar-icon group">
      <span onClick={handleMode}>

        {darkTheme ? (
          <FaSun size='24' />
        ) : (
          <FaMoon size='24' />
        )}
      </span>
    </div>

    );
  };

const SideBarIcon = ({ icon, text = 'tooltip 💡', callBack}) => {
  const handleClick = () => callBack(text);
  return (
    // Group is used to apply CSS to a child element when a parent element changes state.
    //however group does not work in apply so it must be stated here. 

    <div onClick={handleClick} className="sidebar-icon group">
        {icon}
        <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
  );
}

const Divider = () => <hr className="sidebar-hr dark:bg-gray-500" />;

export default SideBar 