import axios from "axios";
import { Business, Staff } from "./types";

const baseApiUrl = process.env.NEXT_PUBLIC_API_URL;

export const fetchBusinesses = async (): Promise<Business[]> => {
  try {
    const response = await axios.get(`${baseApiUrl}/businesses`);
    return response.data;
  } catch (error) {
    console.error("Error fetching companies:", error);
    return [];
  }
};

export const fetchBusiness = async (id: string): Promise<Business | null> => {
  try {
    const response = await axios.get(`${baseApiUrl}/businesses/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching business:", error);
    return null;
  }
};

export const createBusiness = async (
  business: Business
): Promise<Business | null> => {
  try {
    const response = await axios.post(`${baseApiUrl}/businesses`, business);
    return response.data;
  } catch (error) {
    console.error("Error creating business:", error);
    return null;
  }
};

export const updateBusiness = async (
  business: Business
): Promise<Business | null> => {
  try {
    const response = await axios.patch(
      `${baseApiUrl}/businesses/${business.id}`,
      business
    );
    return response.data;
  } catch (error) {
    console.error("Error updating business:", error);
    return null;
  }
};

export const deleteBusiness = async (id: string): Promise<boolean> => {
  try {
    await axios.delete(`${baseApiUrl}/businesses/${id}`);
    return true;
  } catch (error) {
    console.error("Error deleting business:", error);
    return false;
  }
};

export const fetchStaff = async (businessId: string): Promise<Staff[]> => {
  try {
    const response = await axios.get(`${baseApiUrl}/staff/${businessId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching staff:", error);
    return [];
  }
};

export const createStaff = async (
  businessId: string,
  staff: Staff
): Promise<Staff | null> => {
  try {
    console.log("Creating staff:", staff);
    const response = await axios.post(
      `${baseApiUrl}/staff/${businessId}`,
      staff
    );
    return response.data;
  } catch (error) {
    console.error("Error creating staff:", error);
    return null;
  }
};

export const updateStaff = async (
  businessId: string,
  staff: Staff
): Promise<Staff | null> => {
  try {
    const response = await axios.patch(
      `${baseApiUrl}/staff/${businessId}/${staff.id}`,
      staff
    );
    return response.data;
  } catch (error) {
    console.error("Error updating staff:", error);
    return null;
  }
};

export const deleteStaff = async (
  businessId: string,
  staffId: string,
): Promise<boolean> => {
  try {
    await axios.delete(`${baseApiUrl}/staff/${businessId}/${staffId}`);
    return true;
  } catch (error) {
    console.error("Error deleting staff:", error);
    return false;
  }
};
