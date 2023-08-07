import axios from "axios";

const baseurl = process.env.NEXTAUTH_URL;
const api = axios.create({
  baseURL: process.env.NEXTAUTH_URL,
});

export async function getAllUsers(id) {
  try {
    if (id) {
      const response = await axios.get(`/api/user/${id}/contacts`);
      return response.data;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return [];
  }
}

export async function getUser(id) {
  try {
    if (id) {
      const response = await axios.get(`/api/user/${id}`);
      return response.data;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return [];
  }
}

export async function getFRStatus(userId, ChatUserId) {
  const data = {
    senderId: userId,
    receiverId: ChatUserId,
  };
  try {
    const response = await axios.post("api/friends", data);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return [];
  }
}

export async function CreateUpdateFR(data) {
  try {
    const response = await axios.post("api/friends/status", data);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return [];
  }
}

export async function CreateMessage(data) {
  try {
    const response = await axios.post("api/chat", data);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return [];
  }
}

export async function GetAllMessages(id, page) {
  try {
    if (id) {
      const response = await axios.get(`/api/chat/${id}?page=${page}`);
      console.log(response);
      return response.data;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return [];
  }
}
