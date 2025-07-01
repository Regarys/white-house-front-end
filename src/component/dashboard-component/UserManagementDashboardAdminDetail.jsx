import { useLocation } from 'react-router-dom';
import axios from 'axios';

function UserManagementDashboardAdminDetail(){
  const location = useLocation();
  const user = location.state?.user;
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZiZmQzZTNmLTdkMTAtNDhjZC1hZGFjLTZmMTk4NDU5YTgxMSIsInJvbGUiOiJhZG1pbiIsIm5hbWUiOiJhZG1pbjEyMiIsImlhdCI6MTc1MTM2NzkxNywiZXhwIjoxNzUxNDU0MzE3fQ.fEPY_r6-p0wqBJ8Df8GqhyJFwcxrUmPRL7a5xu3htrw";

  if (!user) return <p>Data user tidak ditemukan.</p>;

  const handleVerify = async () => {
    try {
      await axios.patch(
        `http://localhost:8080/api/admin/${user.user_id}/verify`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      alert("User berhasil diverifikasi!");
    } catch (error) {
      console.error(error);
      alert("Gagal memverifikasi user.");
    }
  };

  return(
    <>
     <div>
      <h2>Detail User</h2>
      <p>Name: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Status: {user.is_verified ? 'Verified' : 'Not Verified'}</p>
      <button type="button" onClick={handleVerify}>Verified</button>
    </div>
    </>
  );
}

export default UserManagementDashboardAdminDetail
