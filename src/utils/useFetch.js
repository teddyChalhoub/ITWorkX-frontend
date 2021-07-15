import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [loading, isLoading] = useState(true);
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const [error, isError] = useState(false);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          setMessage("");
          setData(res.data.data);
          isLoading(false);
          isError(false);
        } else {
          throw new Error("Error with Getting data");
        }
      })
      .catch((err) => {
        setData([]);
        setMessage(err.message);
        isLoading(false);
        isError(true);
      });
  }, [url]);

  return { loading, data, message, error };
};

export default useFetch;
