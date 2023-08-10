import axios from "axios";
// post api
const URL = "http://localhost:8000";
const addUser = async (data) => {
  try {
    // URL defines, where to post or send  and data defines, what to post.
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log("getting error while calling data.", error);
  }
};

const getUsers = async () => {
  try {
    return await axios.get(`${URL}/alluser`);
    // return response.data;
  } catch (error) {
    console.log("Error while  fetching data", error);
  }
};

// API for getting data  by Id
const getDataById = async (id) => {
  return await axios.get(`${URL}/${id}`);
};

// API for editing user details
const editUserById = async (user, id) => {
  return await axios.put(`${URL}/${id}`, user);
};
const deleteUserDataById = async (id) => {
  return await axios.delete(`${URL}/${id}`);
};

export { addUser, getUsers, getDataById, editUserById, deleteUserDataById };
