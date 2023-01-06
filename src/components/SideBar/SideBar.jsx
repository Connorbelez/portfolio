import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

const SideBar = () => {
    return (
        <div className="fixed top-0 h-screen w-16 
                        flex flex-col
                        bg-gray-900 text-white shadow-lg">
        <SideBarIcon icon={<FaFire size="28" />} text="home" />
        <Divider />
        <SideBarIcon icon={<BsPlus size="32" />} text="add" />
        <SideBarIcon icon={<BsFillLightningFill size="20" />} text="lightning" />
        <SideBarIcon icon={<FaPoo size="20" />} text="poop"/>
        <Divider />
        <SideBarIcon icon={<BsGearFill size="22" />} text="Settings"/>
        </div>
    )
}; 
 

const SideBarIcon = ({ icon, text = 'tooltip 💡'}) => (
    <div className="sidebar-icon">
        {icon}
        <span class ="sidebar-icon">
            {text}
        </span>
    </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar 