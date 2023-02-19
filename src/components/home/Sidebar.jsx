import { ChatIcon } from "@chakra-ui/icons";
import { Button, Circle, Divider, Heading, HStack, Tab, TabList, Text, useDisclosure, VStack } from "@chakra-ui/react";
import AddFriendModal from "./AddFriendModal";

const Sidebar = ({ friends }) => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <VStack py="1.4rem">
        <HStack justify="space-between" px="7px" w="100%">
          <Heading size="md">Add Friend</Heading>
          <Button onClick={onOpen}>
            <ChatIcon />
          </Button>
        </HStack>
        <Divider />
        <VStack as={TabList} w="100%">
          {friends
            .map(friend => (
              <HStack as={Tab} w="100%"
                justify="space-between">
                <Text>{friend.username}</Text>
                <Circle bg={friend.connected ? "green" : "red"} w="5px" h="5px" />
              </HStack>
            )
            )}
        </VStack>
      </VStack>
      <AddFriendModal isOpen={isOpen} onClose={onClose} />
    </>
  )
};

export default Sidebar