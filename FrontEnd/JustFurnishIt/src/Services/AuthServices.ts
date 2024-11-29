  // Create a function to handle user login
import axios from "axios";
import { ForgotPasswordDetails, LoginRequest,ResetPasswordDetails } from "../Types/AuthTypes";
const _url=import.meta.env.VITE_BASE_API_URL

export const registerUser = async (userData: any) => {
  console.log(userData);
    try {
      const response = await axios.post(`${_url}/Account/register`, {
        firstName :userData.firstName,
        lastName:userData.lastName,
        email:userData.email,
        password:userData.password,
        role:userData.role
      });
      
      return response.data; // Return the response data for further use
    } catch(error:any){
      throw (error.response.data);
    }
  };

  
export const loginUser = async (credentials: LoginRequest) => {
    try {
      console.log(_url);
      
      const response = await axios.post(`${_url}/Account/Login`, {
        email: credentials.email,
        password: credentials.password,
      });
      return response;
    } catch (error:any) {
     throw new Error(error.response.data);
    }
  };

  export const forgotPassword = async (details: ForgotPasswordDetails) => {
    try {
       // Send the email string in the request body as JSON, not as plain text
       const response = await axios.post(`${_url}/Account/forgot-password`, JSON.stringify(details.email), {
        headers: {
          'Content-Type': 'application/json',  // Set the Content-Type to application/json
        },
      });
      return response.data; // Return the response data    
    } catch (error: any) {
      throw new Error(error.response?.data || 'Forgot Password Failed');
    }
  };

  // Function to call the reset-password API
export const resetPassword = async (details: ResetPasswordDetails) => {
  
  try {
    const response = await axios.post(`${_url}/Account/reset-password`, {
      email: details.email,
      Token: details.token.replace(/\s/g, '+'),
      newPassword: details.newPassword,
    });
    return response.data; // Return the response data
  } catch (error: any) {
    throw new Error(error.response?.data || 'Reset Password Failed');
  }
};