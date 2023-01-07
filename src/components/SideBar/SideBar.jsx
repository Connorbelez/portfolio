import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
// import { FaFire, FaPoo } from 'react-icons/fa';
import {
    FaFire,
    FaPoo,
    FaSearch,
    FaHashtag,
    FaRegBell,
    FaUserCircle,
    FaMoon,
    FaSun,
  } from 'react-icons/fa';
  
import useDarkMode from '../../hooks/useDarkMode';
  
const SideBar = () => {
    return (
        <div className="fixed top-0 h-screen w-16 
                        flex flex-col
                        bg-gray-100 text-gray-900  
                        dark:bg-gray-900 dark:text-white shadow-lg">
        <SideBarIcon icon={<FaFire size="28" />}/>
        <Divider />
        <SideBarIcon icon={<BsPlus size="32" />} />
        <SideBarIcon icon={<BsFillLightningFill size="20" />} />
        <SideBarIcon icon={<FaPoo size="20" />}/>
        <Divider />
        <SideBarIcon icon={<BsGearFill size="22" />}/>
        {/* <SideBarIcon icon={ThemeIcon} /> */}
        <ThemeIcon />
        </div>
    )
}; 

const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
        <div className="sidebar-icon group">
      <span onClick={handleMode}>
        {darkTheme ? (
          <FaSun size='24' className='top-navigation-icon' />
        ) : (
          <FaMoon size='24' className='top-navigation-icon' />
        )}
      </span>
    </div>

    );
  };

const SideBarIcon = ({ icon, text = 'tooltip 💡'}) => (
    // Group is used to apply CSS to a child element when a parent element changes state.
    //however group does not work in apply so it must be stated here. 
    <div className="sidebar-icon group">
        {icon}
        <span class ="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

const Divider = () => <hr className="sidebar-hr dark:bg-gray-500" />;

export default SideBar 