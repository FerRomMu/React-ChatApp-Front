import { VStack, ButtonGroup, Button, Heading } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import TextField from './TextField';

const Login = () => {

  const navigate = useNavigate()

  return (
    <Formik
    initialValues= {{username: "", password: ""}}
    validationSchema= { Yup.object({
      username: Yup.string().required("Username required"),
      password: Yup.string()
        .required("Password required")
        .min(6, "Password too short"),
    })}
    onSubmit= {(values, actions) => {
      alert(JSON.stringify(values, null, 2))
      actions.resetForm()
    }}>
      <VStack 
      as={Form}
      w={{base: "90%", md: "500px"}}
      m="auto"
      justify="center"
      h="100vh">

        <Heading> Log In </Heading>
        <TextField 
          label="Username"
          name="username"
          placeholder="Enter username"
          autocomplete="off"
        />
        <TextField
          label="Password" 
          name="password"
          placeholder="Enter password"
          autocomplete="off"
          type="password"
        />

        <ButtonGroup>
          <Button colorScheme="teal" type="submit">Log In</Button>
          <Button onClick={ () => navigate('/register') }>Create Account</Button>
        </ButtonGroup>

      </VStack>
    </Formik>
  );
};

export default Login;