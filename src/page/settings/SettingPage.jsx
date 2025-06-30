import ProfileSettings from '../../component/settings-component/ProfileSettings.jsx';
import SidebarSettings from '../../component/settings-component/SidebarSettings.jsx';

function SettingPage() {
  return(
    <>
      <div className="settings-container">
        <SidebarSettings/>
        <ProfileSettings/>
      </div>
    </>
  )
}

export default SettingPage;
