import React, { useState } from 'react';
import { Button, Modal, Input } from 'antd';
import { Space, Table } from 'antd';
import type { TableProps } from 'antd';
import { MdOutlineDeleteForever } from "react-icons/md";
import { RiEdit2Line } from 'react-icons/ri';


export interface DataType {
  key: string;
  firstName: string;
  secondName: string;
  email: string;
  birth: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'First Name',
    dataIndex: 'firstName',
    key: 'firstName',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Second Name',
    dataIndex: 'secondName',
    key: 'secondName',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Birth Date',
    dataIndex: 'birth',
    key: 'birth',
  },
  
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <button className="edit-button">
          <RiEdit2Line className="edit-icon text-xl mr-2" style={{ color: 'green',  marginRight: '0.5rem' }} />
        </button>
        <button className="delete-button">
          <MdOutlineDeleteForever className="delete-icon text-xl mr-2" style={{ color: 'red',  marginRight: '0.5rem' }} />
        </button>
      </Space>
    ),
  },
];

const Users: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState<Partial<DataType>>({
    key: '',
    firstName: '',
    secondName: '',
    email: '',
    telph: '',
  });
  const [data, setData] = useState<DataType[]>([{
    key:"1",
    firstName:"Oussama",
    secondName:"Aftys",
    email:"oussamaatys@gmail.com",
    birth:'05-01-2004'
  }]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setData([...data, userData as DataType]);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="users-container">
      <h1 className="users-title" style={{ fontSize: '24px', fontWeight: 'bold', color: 'blue' }}>Users</h1>
      <Button type="primary" onClick={showModal} className="add-user-button " style={{ color: '#6666ff', marginTop: 20, marginBottom:20 }}>
        Add User
      </Button>
      <Modal title="Add User" visible={isModalOpen} onOk={handleOk} onCancel={handleCancel} okButtonProps={{ style: { color: 'blue' } }} >
        <Input placeholder="First Name" name="firstName" value={userData.firstName} onChange={handleInputChange} style={{  marginTop: 10, marginBottom:10 }} />
        <Input placeholder="Second Name" name="secondName" value={userData.secondName} onChange={handleInputChange} style={{  marginTop: 10, marginBottom:10 }} />
        <Input placeholder="Email" name="email" value={userData.email} onChange={handleInputChange} style={{  marginTop: 10, marginBottom:10 }} />
        <Input placeholder="Phone Number" name="telph" value={userData.telph} onChange={handleInputChange} style={{  marginTop: 10, marginBottom:10 }} />
      </Modal>
      
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Users;
