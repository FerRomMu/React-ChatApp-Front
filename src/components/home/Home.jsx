import { Grid, GridItem, Tabs } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

const Home = ({ token, setToken }) => {
  const [friends, setFriends] = useState([
    { username: "ww", connected: false },
    { username: "ass", connected: false },
    { username: "as", connected: false },
    { username: "fafda", connected: true },
    { username: "ee", connected: false },
    { username: "aaaa", connected: false },
    { username: "fofofo", connected: false },
    { username: "fififi", connected: false },
    { username: "fefefe", connected: true }
  ])

  /**
   * Sort friend list by connected members when
   * it changes.
   */
  useEffect(() => {
    const sortedFriends = [...friends].sort((a, b) => (a.connected === b.connected) ? 0 : a.connected ? -1 : 1);
    setFriends(sortedFriends);
  }, [friends])

  return (
    <Grid templateColumns="repeat(10,1fr)" h="100vh" as={Tabs}>
      <GridItem colSpan="3" borderRight="1px solid gray">
        <Sidebar friends={friends} />
      </GridItem>
      <GridItem colSpan="7">
        <Chat friends={friends} />
      </GridItem>
    </Grid>
  )
};

export default Home