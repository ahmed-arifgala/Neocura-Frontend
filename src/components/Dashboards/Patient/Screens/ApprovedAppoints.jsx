import React, { useEffect, useState } from "react";
import AppointCard from "../../../../UI/AppointCard/PatientApprovedAppoint";
import axios from "axios";
import nodataGif from "../../../../assets/images/NoData.gif";
const Approved = () => {
  const [data, setData] = useState();
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    axios
      .get(`http://localhost:5000/onlineBooking/getApprovedForPat/${userId}`)
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div
      style={{
        overflowX: "hidden",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
        padding: "20px",
        backgroundColor: "inherit",
      }}
    >
      <h1>Appointments Approved</h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {data?.length > 0 ? (
          data?.map((item, ind) => {
            return <AppointCard data={item} />;
          })
        ) : (
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              flexDirection: "column",
            }}
          >
            <img src={nodataGif} alt="gif" height={300} width={300} />
            <h2>You have no Approved Requests</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Approved;