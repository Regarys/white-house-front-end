import { SlGlobe, SlUser, SlLock, SlSettings } from "react-icons/sl";

function SidebarSetings() {
  return(
  <div className="sidebar-settings">
      <div className="settings-name-container">
        <p className="settings-name">Settings</p>
        <p>Make it Yours</p>
      </div>
      <div className="settings-menu-container">
        <div className="profile-menu">
          <SlUser size={28}/>
          <p>My Profile</p>
        </div>
        <div className="profile-menu">
          <SlLock size={28}/>
          <p>Privacy and Security</p>
        </div>
         <div className="profile-menu">
          <SlSettings size={28}/>
          <p>Acount Settings</p>
        </div>
         <div className="profile-menu">
          <SlGlobe size={28}/>
          <p>Language</p>
        </div>
      </div>
      <button>BACK</button>
  </div>
  )
}

export default SidebarSetings;
