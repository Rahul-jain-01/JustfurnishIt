import axios from "axios";
const _url=import.meta.env.VITE_BASE_API_URL


export const getAvailableTimes = async (designerId: string, dateStr: string): Promise<string[]> => {
    const response = await axios.get<string[]>(`${_url}/booking/available-times?designerId=${designerId}&date=${dateStr}`);
    return response.data;
};

export const getDesignerName = async (designId: string): Promise<{ designerName: string }> => {
    const response = await axios.get<{ designerName: string }>(`${_url}/booking/designer-name/${designId}`);
    return response.data;
};

export const getUserByCustomerId = async (customerId: Number): Promise<any> => {
    const response = await axios.get(`${_url}/Booking/user/${customerId}`);
    return response.data;
};

export const getBookingByDesignerId = async (designerId: Number): Promise<any> => {
    const response = await axios.get(`${_url}/Booking/designer/${designerId}`);
    return response.data;
};

export const completeBooking = async (bookingId: Number): Promise<void> => {
    await axios.put(`${_url}/Booking/${bookingId}/complete`);
};