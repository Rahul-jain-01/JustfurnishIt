import axios from "axios";
import { Quote } from "../Types/EstimateQuotation";
const _url=import.meta.env.VITE_BASE_API_URL


export const getQuotesByDesignId = async (designId: string | undefined): Promise<any> => {
    const response = await axios.get(`${_url}/Quotes/byDesignId/${designId}`);
    return response.data;
};

export const createQuote = async (quoteData: Quote): Promise<void> => {
    try {
      const response = await axios.post(`${_url}/Quotes`, quoteData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      
    } catch (error) {
      console.error('There was an error creating the quote!', error);
      throw error; // Optionally re-throw to handle errors in the component
    }
  };

  export const updateQuote = async (id:String ,quoteData: Quote): Promise<void> => {
    try {
      const response = await axios.put(`${_url}/Quotes/${id}`, quoteData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      
    } catch (error) {
      console.error('There was an error creating the quote!', error);
      throw error; // Optionally re-throw to handle errors in the component
    }
  };