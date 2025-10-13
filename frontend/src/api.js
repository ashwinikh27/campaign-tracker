import axios from 'axios';
const BASE_URL = 'http://localhost:5000/api';

export const getCampaigns = () => axios.get(`${BASE_URL}/campaigns`);
export const addCampaign = (data) => axios.post(`${BASE_URL}/campaigns`, data);
export const updateCampaign = (id, data) => axios.put(`${BASE_URL}/campaigns/${id}`, data);
export const deleteCampaign = (id) => axios.delete(`${BASE_URL}/campaigns/${id}`);
