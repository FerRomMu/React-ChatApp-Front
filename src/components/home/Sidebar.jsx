import { ChatIcon } from "@chakra-ui/icons";
import { Button, Circle, Divider, Heading, HStack, Tab, TabList, Text, VStack } from "@chakra-ui/react";

const Sidebar = ({ friends }) => {
    return (
        <VStack py="1.4rem">
            <HStack justify="space-between" px="7px" w="100%">
                <Heading size="md">Add Friend</Heading>
                <Button>
                    <ChatIcon/>
                </Button>
            </HStack>
            <Divider/>
            <VStack as={ TabList } w="100%">
                { friends
                    .map(friend => (
                        <HStack as={ Tab } w="100%"
                            justify="space-between">
                            <Text>{ friend.username }</Text>
                            <Circle bg={ friend.connected? "green" : "red" } w="5px" h="5px"/>
                        </HStack>
                    )
                )}
            </VStack>
        </VStack>
    )
};

export default Sidebar