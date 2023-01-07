import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Secret from "./Secret";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <button className="log" onClick={() => logout()}>
          Log Out
        </button>
        <Secret />
      </div>
    )
  );
};

export default LogoutButton;
