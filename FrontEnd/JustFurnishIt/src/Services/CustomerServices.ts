import axios from "axios";
import { CustomerCreateDTO } from "../Types/CustomerModel";
const _url=import.meta.env.VITE_BASE_API_URL


export const createCustomer = async (customerDTO: CustomerCreateDTO) => {
    try {
      const response = await axios.post(`${_url}/Customer`, customerDTO, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error creating customer:', error);
      throw error;
    }
  };

  export const getWishlistByCustomerId = async (customerId: Number): Promise<any> => {
    const wishlistResponse = await axios.get(`${_url}/WishList/${customerId}`);
    return wishlistResponse.data;
};
export const deleteWishlistItem = async (customerId: Number, wishListId: string): Promise<void> => {
  await axios.delete(`${_url}/WishList/${customerId}/${wishListId}`);
};