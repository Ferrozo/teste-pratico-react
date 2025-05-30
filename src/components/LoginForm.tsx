import React, { useState } from "react";
import axios from "axios";
import {
  Form,
  Input,
  Button,
  ErrorText,
  Title,
} from "../pages/styles/styles"; // ajuste o caminho

interface Props {
  onSuccess: (token: string) => void;
}

const LoginForm: React.FC<Props> = ({ onSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [serverError, setServerError] = useState("");

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email inválido";
    }
    if (!password || password.length < 6) {
      newErrors.password = "A senha deve ter pelo menos 6 caracteres";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    try {
  const res = await axios.post("https://reqres.in/api/login", {
  email,
  password,
});

      onSuccess(res.data.token);
    } catch (err) {
      setServerError("Credenciais inválidas. Tente novamente.");
    }
  };

  return (
    <>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          hasError={!!errors.email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <ErrorText>{errors.email}</ErrorText>}

        <Input
          type="password"
          placeholder="Senha"
          value={password}
          hasError={!!errors.password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <ErrorText>{errors.password}</ErrorText>}

        {serverError && <ErrorText>{serverError}</ErrorText>}

        <Button type="submit">Entrar</Button>
      </Form>
    </>
  );
};

export default LoginForm;
