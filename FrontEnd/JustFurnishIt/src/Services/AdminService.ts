import axios from 'axios';
const _url=import.meta.env.VITE_BASE_API_URL

// Base URLs for the APIs
const USER_API_BASE_URL = _url;
const DESIGNER_API_BASE_URL = _url;

// Function to get all users
export const getUsers = async () => {
  const response = await axios.get(`${USER_API_BASE_URL}/Account/GetAllUser`);
  return response.data;
};

// Function to delete a user
export const deleteUser = async (userId: number) => {
  const response = await axios.delete(`${USER_API_BASE_URL}/account/${userId}`);
  return response.data;
};

// Function to get all designers
export const getDesigners = async () => {
  const response = await axios.get(`${DESIGNER_API_BASE_URL}/Designer/designer-details`);
  return response.data;
};

// Function to approve a designer
export const approveDesigner = async (designerId: number) => {
    const response = await axios.put(`${DESIGNER_API_BASE_URL}/designer/approve/${designerId}`);
    return response.data;
  };
  
  // Function to reject a designer
  export const rejectDesigner = async (designerId: number) => {
    const response = await axios.put(`${DESIGNER_API_BASE_URL}/designer/reject/${designerId}`);
    return response.data;
  };


