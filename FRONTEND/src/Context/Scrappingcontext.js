import React, { createContext, useEffect, useState } from "react";

export  const Scrappingcontext = createContext();

export const UserProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("awesomeLeadsToken"));

  useEffect(() => {
    const fetchUser = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };

      const response = await fetch("/scraping/AnnonceAlgerie", requestOptions);

      if (!response.ok) {
        setToken(null);
      }
      localStorage.setItem("awesomeLeadsToken", token);
    };
    fetchUser();
  }, [token]);

  return (
    <Scrappingcontext.Provider value={[token, setToken]}>
      {props.children}
    </Scrappingcontext.Provider>
  );
};