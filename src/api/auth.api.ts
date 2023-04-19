import axios from "axios";
import { TOKEN_ACTIONS } from "../constants";

export const fetchAuthorization = async (data: any):Promise<any> => {
  const fetched = await axios({
    method: 'POST',
    url: `${process.env.API_URL}/login`,
    data: {
      email: data.email,
      password: data.password,
    },
    withCredentials: true,
  });
  return fetched.data;
};

export const fetchRegistration = async (data: any):Promise<any> => {
  const fetched = await axios({
    method: 'POST',
    url: `${process.env.API_URL}/register`,
    data: {
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
    },
    withCredentials: true,
  });
  return fetched.data;
};

export const fetchCurrentUser = async ():Promise<any> => {
  const fetched = await axios({
    method: 'GET',
    url: `${process.env.API_URL}/get-user`,
    params: {
      action: TOKEN_ACTIONS.login,
    },
    withCredentials: true,
  });
  return fetched.data;
};