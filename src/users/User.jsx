import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import ShowMessage from '../components/ui/showmessage';
import MUIDataTable from "mui-datatables";
import { Link } from 'react-router-dom';
import { userService } from '../service/UserService'; 

function Users() {
  const [users, setUsers] = useState([]);
  const [showMessageBool, setShowMessageBool] = useState(false);
  const [messageType, setMessageType] = useState('error');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchUsers();
  },[]);

  const fetchUsers = async()=>{
    try {
      const allUsers = await userService.fetchAllUsers();
      setUsers(allUsers);
      console.log(users)
    } catch (error) {
      setShowMessageBool(true);
      setMessageType('error');
      setMessage('Failed to fetch users.');
    }
  };

  const deleteUser = async (userId) => {
    // Code to delete user...
  };

  const columns = [
    {
      name: 'id',
      label: 'ID',
      options: {
        display: false,
      },
    },
    "firstname",
    "lastname",
    "email",
    "role",
    {
      name: 'Actions',
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <button onClick={() => deleteUser(tableMeta.rowData[0])}>Delete</button>
          );
        },
      },
    }
  ];

  return (
    <Layout>
      {showMessageBool && <ShowMessage messageType={messageType} message={message} />}
      <div className=' p-5'>
        <div className='flex flex-row justify-between items-center'>
          <h1 className='text-sm font-medium'>Dashboard/Users</h1>
          <Link to="/users/add">
            <button type="button" className="text-white bg-gradient-to-br from-gray-800 to-blue-800 hover:bg-gradient-to-bl  font-medium rounded-lg text-sm px-4 py-2 text-center">Add User</button>
          </Link>
        </div>
        <br />
        <MUIDataTable
          title={"Users"}
          data={users}
          columns={columns}
        />
      </div>
    </Layout>
  );
}

export default Users;
