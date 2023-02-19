import { TabPanel, TabPanels, VStack } from "@chakra-ui/react";

const Chat = ({ friends }) => {
  return (
    <VStack>
      <TabPanels>
        {friends
          .map(friend => (
            <TabPanel>{"chat de " + friend.username}</TabPanel>
          ))
        }
      </TabPanels>
    </VStack>
  )
};

export default Chat