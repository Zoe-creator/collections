import api from "./api-config"

export const getLikes = async () => {
  try {
    const response = await api.get("/likes");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getLike = async (id) => {
  try {
    const response = await api.get(`/likes/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createLike = async (likeData) => {
  try {
    const response = await api.post(`/likes`,{like: likeData} );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateLike = async (id, likeData) => {
  try {
    const response = await api.put(`/likes/${id}`, { like: likeData });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteLike = async (id) => {
  try {
    const response = await api.delete(`/likes/${id}`);
    return response
  } catch (error) {
    throw error;
  }
}




