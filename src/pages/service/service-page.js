import React, { useEffect, useState } from "react";
import "./service-page.css";
import ServiceDisplay from "../../components/ServiceDisplay/serviceDisplay1";
import ServiceCard from "../../components/ServiceDisplay/serviceCard";
import axios from "axios";

const Service = () => {
  const [visible, isVisible] = useState(false);
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [serviceData, setServiceData] = useState([]);

  const handleVisibilityAndData = (value, data) => {
    isVisible(value);
    setService(data);
  };


  const fetchServices = async () => {
    setLoading(true);
    setError(false);
    setServiceData([]);
    setMessage("");

    try {
      const response = await axios.get("http://localhost:5000/service");
      const data = response.data;
      if (!data.success) {
        throw new Error(data.message);
      }
      setServiceData(data.data);
      setLoading(false); 
      setError(false);       
      setMessage('');

  
    } catch (e) {   
      setLoading(false);
      setError(true);
      setMessage(e.message);
      setServiceData([]);

  
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <>
      {loading ? (
        <div>loading...</div>
      ) : error ? (
        <div>{message}</div>
      ) : visible ? (
        <ServiceDisplay service={service} />
      ) : (
        <div className="service_wrapper">
          <p className="p_first">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Fringilla est ullamcorper eget nulla facilisi etiam dignissim.
            Elementum eu facilisis sed odio morbi quis commodo odio. Quam
            viverra orci sagittis eu volutpat. Vulputate mi sit amet mauris
            commodo. Consectetur libero id faucibus nisl tincidunt eget nullam
            non nisi. Elementum curabitur vitae nunc sed velit. Diam quam nulla
            porttitor massa id neque aliquam. Dapibus ultrices in iaculis nunc
            sed augue lacus. Felis eget velit aliquet sagittis id consectetur
            purus ut faucibus. Sed cras ornare arcu dui vivamus arcu. Auctor eu
            augue ut lectus arcu bibendum at. Interdum consectetur libero id
            faucibus nisl tincidunt eget.
          </p>

          {serviceData &&
            serviceData.map((res, index) => {
              return (
                <ServiceCard
                  hakunamatata={res}
                  second={index % 2 == 0}
                  handleVisibilityAndData={handleVisibilityAndData}
                />
              );
            })}
        </div>
      )}
    </>
  );
};

export default Service;
