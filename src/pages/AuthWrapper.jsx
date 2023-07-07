import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Wrapper as AuthContainer } from "../styled-components/AuthWrapper.styles";

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <AuthContainer>
        <div className="loading"></div>
      </AuthContainer>
    );
  }

  if (error) {
    return (
      <AuthContainer>
        <h1>{error.message}</h1>
      </AuthContainer>
    );
  }

  return <>{children}</>;
};

export default AuthWrapper;
