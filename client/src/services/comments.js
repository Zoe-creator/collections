import api from "./api-config"

export const getComments = async () => {
  try {
    const response = await api.get("/comments");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getComment = async (id) => {
  try {
    const response = await api.get(`/comments/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createComment = async (commentData) => {
  try {
    const response = await api.post(`/comments`,{comment: commentData} );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateComment = async (id, commentData) => {
  try {
    const response = await api.put(`/posts/${id}`, { post: commentData });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteComment = async (id) => {
  try {
    const response = await api.delete(`/comments/${id}`);
    return response
  } catch (error) {
    throw error;
  }
}




