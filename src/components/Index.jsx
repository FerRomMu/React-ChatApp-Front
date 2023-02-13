import { Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Index = ({ token }) => {
    const [testMsg, setTestMsg] = useState(null);
    
    useEffect(() => {
        fetch("http://localhost:8081/auth", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        },
      }).then( res => { 
        if(!res || !res.ok || res.status > 400) { return }
        return res.json()
      }).then(json => {
        setTestMsg(json.name)
      })
      .catch(err => { return })
    }, [token])

    return (
        <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
          { testMsg ? (
            <Heading as="h1" size="lg">Hi {testMsg}! You're logged in.</Heading>
          ) : (
            <Heading as="h1" size="lg">Loading...</Heading>
          )}
        </Box>
      )      
}

export default Index
