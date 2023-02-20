import { FC, memo, useCallback } from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Button,
  Container,
  Input,
  Label,
  Error,
  InputContainer,
} from "./styles";
import { Formik, Field } from "formik";
import { initialValues, validationSchema } from "./constants";
// import { BackButton } from '../../../components/Navbar/styles'
import { setToken } from "../../../services/storage";
import { login } from "../../../services/api/auth";

const LoginForm: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (values: typeof initialValues) => {
    const loginError = await login(values);

    if (!loginError) {
      navigate("/home ");
    } else {
      setError(loginError);
    }
  };

  const goToBack = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <Container>
      <Formik
        validationSchema={validationSchema}
        onSubmit={handleLogin}
        initialValues={initialValues}
      >
        <Form>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Field name="email">
              {({ field, meta }: { field: any; meta: any }) => (
                <InputContainer>
                  <Label>Email</Label>
                  <Input $hasError={!!meta?.error} type="text" {...field} />
                  {meta?.error && <Error>{meta.error}</Error>}
                </InputContainer>
              )}
            </Field>
            <Field name="password">
              {({ field, meta }: { field: any; meta: any }) => (
                <InputContainer>
                  <Label>Password</Label>
                  <Input $hasError={!!meta?.error} {...field} type="password" />
                  {meta?.error && <Error>{meta.error}</Error>}
                </InputContainer>
              )}
            </Field>
            <Button type="submit">Login</Button>
          </div>
          {/* <BackButton onClick={goToBack}>🔙</BackButton> */}
        </Form>
      </Formik>
    </Container>
  );
};

export default memo(LoginForm);