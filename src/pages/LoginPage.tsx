// src/pages/LoginPage.tsx
import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import { PageContainer, LoginBox } from "./styles/styles";

const LoginPage: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);

  return (
    <PageContainer>
      <LoginBox>
        {token ? (
          <>
            <h3>Logado com sucesso!</h3>
            <p>Token: {token}</p>
          </>
        ) : (
          <LoginForm onSuccess={setToken} />
        )}
      </LoginBox>
    </PageContainer>
  );
};

export default LoginPage;
