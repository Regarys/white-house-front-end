import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';



function UserManagementDashboardAdminDetail(){
  const location = useLocation();
  const user = location.state?.user;
  const navigate = useNavigate();

  if (!user) return <p>Data user tidak ditemukan.</p>;

  const handleVerify = async () => {
    try {
      await axios.patch(
        `http://localhost:8080/api/admin/${user.user_id}/verify`,
        {},
        {
          headers: {
            Authorization : `Bearer ${localStorage.getItem("token")}`
          }
        }
      );
      alert("User berhasil diverifikasi!");
      navigate(-1);
    } catch (error) {
      console.error(error);
      alert("Gagal memverifikasi user.");
    }
  };

  console.log(user);
  return(
    <>
      <div className="container-user-management">
        <h1>Verifikasi User</h1>
        <div className="container-user-detail">
          <div className="container-left">
            <div className="custom-container-detail">
              <h3>Ktp</h3> 
              <img src={`http://localhost:8080/${user.id_card_photo}`} alt="Gambar KTP"/>
            </div>
            <div className="custom-container-detail">
              <h3>Full Name</h3>
              <p>{user.username}</p>
            </div>
          </div>
          <div className="container-right">
            <div className="custom-container-detail">
              <h3>Email </h3>
              <p>{user.email}</p>
            </div>
            <div className="custom-container-detail">
              <h3>Nik</h3>
              <p>{user.nik}</p>
            </div>
            <div className="custom-container-detail">
              <h3>Gender</h3>
              <p>{user.gender}</p>
            </div>
            <div className="custom-container-detail">
              <h3>Adress</h3>
              <p className="address-detail">{user.address}</p>
            </div>
            <div className="custom-container-detail">
              <h3>Status</h3>
              <p>{user.is_verified ? 'Verified' : 'Not Verified'}</p>
            </div>
          </div>
        </div>
        <div className="button-container-detail">
          <button type="button" onClick={handleVerify}>Verified</button>
          <button type="button">Suspend</button>
        </div>
      </div>
    </>
  );
}

export default UserManagementDashboardAdminDetail
