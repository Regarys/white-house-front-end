import { SlCloudUpload } from "react-icons/sl";

function ProfileSettings() {
  return(
  <div className="profile-settings">
      <div className="profile-title-container">
        <h1>Profile</h1>
        <p>Manage your name, password, or more</p>
      </div>
      <div className="profile-item-container">
        <form className="profile-item-form">
          <div className="profile-item">
            <div className="profile-item-label">
              <label>Profile Photo</label>
              <p>:</p>
            </div>
            <img src="/profile.jpg" alt="foto profile"/>
            <div className="custom-file-upload">
              <SlCloudUpload size={20}/>
              <label>Upload Image</label> 
              <input type="file" value=""/>
            </div>
          </div>
          <div className="profile-item">
            <div className="profile-item-label">
              <label>Full Name</label>
              <p>:</p>
            </div>
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="Last Name"/>
          </div>
          <div className="profile-item">
            <div className="profile-item-label">
              <label>Gender</label>
              <p>:</p>
            </div>
            <div className="profile-item-radio-button">
              <label className="radio-wrapper">
                <input type="radio" name="gender" value="male" />
                <span className="custom-radio"></span>
                Male
              </label>
              <label className="radio-wrapper">
                <input type="radio" name="gender" value="female" />
                <span className="custom-radio"></span>
                Female
              </label>
            </div>
          </div>
        <div className="profile-item">
            <div className="profile-item-label">
              <label>Bio</label>
              <p>:</p>
            </div>
            <input type="text"/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
  </div>
  )
}

export default ProfileSettings;
