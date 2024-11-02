import { CustomException } from "../../utils/helpers";
import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (process.env.REACT_APP_NEWS_API_KEY) {
      // config.headers["X-Api-Key"] = process.env.REACT_APP_NEWS_API_KEY;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const apiService = async (reqObj) => {
  try {
    const res = await axiosInstance.request(reqObj);
    return res?.data ?? res;
  } catch (error) {
    const errObj = new CustomException(
      error?.response?.data?.message || "something went wrong!",
      error?.response?.data?.errorData || []
    );
    alert(errObj?.message);
    return Promise.reject(errObj);
  }
};
