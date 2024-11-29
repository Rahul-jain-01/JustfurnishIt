import axios from "axios";
import { Review } from "../Types/FeedbackModel";
const _url=import.meta.env.VITE_BASE_API_URL

export const fetchUserReviewForDesigner = async (userId: number): Promise<Review[] | null> => {
  try {
    const response = await axios.get<Review[]>(`${_url}/Review/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Failed to load reviews:", error);
    return null;
  }
};


export const getReviewsByDesignerId = async (designerId: Number): Promise<Review[]> => {
  const response = await axios.get<Review[]>(`${_url}/Review/designer/${designerId}`);
  return response.data;
};

export const submitReview = async (reviewData: any): Promise<void> => {
  await axios.post(`${_url}/Review`, reviewData, {
      headers: {
          'Content-Type': 'application/json',
      },
  });
};