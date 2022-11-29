import React, { useEffect, useState } from "react";import axios from "axios";
import { Button, Container } from "react-bootstrap";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function AuthComponent() {
  const token = cookies.get("TOKEN");

  const [message, setMessage] = useState("");

  // useEffect automatically executes once the page is fully loaded
  useEffect(() => {
    // set configurations for the API call here
    const configuration = {
      method: "get",
      url: "https://nodejs-mongodb-auth-app.herokuapp.com/auth-endpoint",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        // assign the message in our result to the message we initialized above
        setMessage(result.data.message);
      })
      .catch((error) => {
        error = new Error();
      });
  }, [token]);

  // logout
  const logout = () => {
    // destroy the cookie
    cookies.remove("TOKEN", { path: "/" });
    // redirect user to the landing page
    window.location.href = "/";
  };

  return (
    <Container>
      <h1 className="text-center">Auth Component</h1>
      {/* displaying our message from our API call */}
      <h3 className="text-danger">{message}</h3>
      {/* logout */}
      <Button type="submit" variant="danger" onClick={() => logout()}>
        Logout
      </Button>{" "}
    </Container>
  );
}
