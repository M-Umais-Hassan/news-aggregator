import { apiService } from "./configs/axiosConfig";

export const newsApi = {
  headlinesListing: async (data) => {
    try {
      const response = await apiService({
        url: `/newsapi/headlines`,
        method: "POST",
        data: data,
      });

      return response?.data ?? response;
    } catch (error) {
      throw error;
    }
  },
  newsListing: async (data) => {
    try {
      const response = await apiService({
        url: `/newsapi/everything`,
        method: "POST",
        data: data,
      });

      return response?.data ?? response;
    } catch (error) {
      throw error;
    }
  },
  sourcesListing: async (data) => {
    try {
      const response = await apiService({
        url: `/newsapi/sources`,
        method: "GET",
        data: data,
      });

      return response?.data ?? response;
    } catch (error) {
      throw error;
    }
  },
  nyTimesListing: async (data) => {
    try {
      const response = await apiService({
        url: `https://api.nytimes.com/svc/search/v2/articlesearch.json`,
        method: "GET",
        data: data,
      });

      return response?.data ?? response;
    } catch (error) {
      throw error;
    }
  },
};
