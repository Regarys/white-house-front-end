import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserManagementDashboardAdmin() {
  const [ users, setUsers ] = useState([]);
  const navigate = useNavigate();


  useEffect(()=>{
    async function fetchData() {
      try{
        const response = await axios.get("http://localhost:8080/api/admin/users", {
          headers :{
            Authorization : `Bearer ${localStorage.getItem("token")}`
          }
        });
        setUsers(response.data.data)
      } catch (error) {
        console.error(`Error Fetching Users : ${error}`)
      }
    }
    fetchData();

  }, [])

  const handleData = (user) =>{
    navigate(`/dashboard-admin/user/${user.user_id}`, {state : {user}});
  }

  return(
    <>
      <div className="main-admin">
        <div className="container-user-management-list">
          <h1>Kelola User</h1>
          <div className="user-list">
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Nik</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index)=> (
                  <tr key={user.user_id}>
                    <td>{index + 1}</td>
                    <td>{user.username}</td>
                    <td>{user.nik}</td>
                    <td>{user.email}</td>
                    <td>{user.is_verified ? 'Verified' : 'Not Verified'}</td>
                    <td><button onClick={() => handleData(user)}>Edit</button></td>
                  </tr>
                ))}
              </tbody>
              </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserManagementDashboardAdmin;
