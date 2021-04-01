import api from "./api-config"

export const getProfiles = async () => {
  try {
    const response = await api.get("/profiles");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProfile = async (id) => {
  try {
    const response = await api.get(`/profiles/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createProfile = async (profileData) => {
  try {
    const response = await api.post(`/profiles`,{profile: profileData} );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateProfile = async (id, profileData) => {
  try {
    const response = await api.put(`/profiles/${id}`, { profile: profileData });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProfile = async (id) => {
  try {
    const response = await api.delete(`/profiles/${id}`);
    return response
  } catch (error) {
    throw error;
  }
}




