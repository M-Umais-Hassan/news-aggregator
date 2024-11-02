import { useState } from "react";

const useApi = () => {
  const [loading, setLoading] = useState(false);

  const invokeApi = async (apiHandler) => {
    try {
      setLoading(true);
      const response = await apiHandler();
      return response;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return [loading, invokeApi];
};

export default useApi;
