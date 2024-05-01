import {
  Box,
  Center,
  Circle,
  Flex,
  Heading,
  Image,
  Spacer,
  Square,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";

const App = () => {
  return (
    <div className="App">
      <Box paddingBlock="3rem" bg="#fcfcfc" w="100%">
        <Heading
          paddingInline="1.5rem"
          color="#001233"
          fontSize="1.75rem"
          fontWeight="700"
        >
          Budget
        </Heading>
        <Flex paddingInline="1.5rem" w="180px" mt={"2rem"}>
          <Circle bg="rgba(4, 102, 200, 0.2)" size="20px" color="#0466C8">
            <Image src="/naira.png" />
          </Circle>
          <Spacer />
          <Text
            color="#707480"
            fontWeight="400"
            lineHeight="20.3px"
            fontSize=".875rem"
          >
            Monthly Budget
          </Text>
        </Flex>

        <Box
          ml="1.5rem"
          mr="1.5rem"
          mt="1rem"
          bg="white"
          boxShadow="lg"
          borderRadius="10px"
          p="1rem"
        >
          <Text
            color="#001233"
            fontWeight="700"
            fontSize="1.75rem"
            lineHeight="36px"
          >
            ₦120,000
          </Text>
        </Box>
        <Box mt="1.5rem" paddingInline="1.5rem">
          <Flex>
            <Flex align="center" gap="1.5rem">
              <Center
                color="#707480"
                fontSize="1rem"
                fontWeight="400"
                lineHeight="30.5px"
              >
                Last Month
              </Center>
              <Center pos="relative">
                <Text
                  color="#0466C8"
                  fontSize="1rem"
                  fontWeight="400"
                  lineHeight="30.5px"
                >
                  {" "}
                  This Month
                </Text>
                <Box
                  top="100%"
                  left="0"
                  w="50px"
                  h="2px"
                  bg="#0466C8"
                  pos="absolute"
                  as="span"
                ></Box>
              </Center>
            </Flex>
            <Spacer />
            <Center bg="white" w="30px" h="16px">
              <Image src="/dots.png"></Image>
            </Center>
          </Flex>
          <Center mt="2rem">
            <Square size="150px">
              <Circle border="10px solid rgba(4, 102, 200, 0.4)" size="150px">
                <Circle
                  transform="rotate(45deg)"
                  size="135px"
                  border="8px solid rgba(4, 102, 200, 1)"
                  borderLeft="8px solid transparent"
                  borderBottom="8px solid transparent"
                  borderRadius="100%"
                >
                  <Center>
                    <Text
                      fontWeight="700"
                      fontSize="2.25rem"
                      color="rgba(4, 102, 200, 1)"
                      transform="rotate(-45deg)"
                    >
                      49%
                    </Text>
                  </Center>
                </Circle>
              </Circle>
            </Square>
          </Center>
          <Center mt="1rem">
            <VStack>
              <Text
                lineHeight="20.3px"
                color="#707480"
                fontWeight="400"
                fontSize=".875rem"
              >
                Amount spent so far
              </Text>
              <Text
                lineHeight="20.3px"
                color="#707480"
                fontWeight="400"
                fontSize="1rem"
              >
                <Box fontWeight="500" color="#0466C8" as="span">
                  ₦50,000
                </Box>
                <Box fontWeight="500" color="#67a2dc" as="span">
                  /₦120,000
                </Box>
              </Text>
            </VStack>
          </Center>
        </Box>
        <Box mt="2rem">
          <Box paddingInline="1.5rem">
            <Text
              fontSize="1.3125rem"
              lineHeight="24px"
              fontWeight="500"
              color="#001233"
            >
              Category Breakdown
            </Text>
          </Box>
          <Box mt="1rem" bg="#fcfeff" p="1rem">
            <VStack align="left" className="hello">
              <Flex justify="space-between" flexWrap="wrap">
                <Flex align="center" gap="1rem">
                  <Image src="/food.svg" />
                  <Box>
                    <Text
                      fontWeight="500"
                      color="#001233"
                      fontSize=".875rem"
                      lineHeight="24px"
                    >
                      Food and Drink
                    </Text>
                    <Text fontSize=".875rem" lineHeight="24px">
                      40%
                    </Text>
                  </Box>
                </Flex>
                <Text>
                  <Box fontWeight="bold" as="span">
                    ₦20,000
                  </Box>
                  <Box color="#c1c4cd" as="span">
                    /₦42,000
                  </Box>
                </Text>
              </Flex>
            </VStack>
            <VStack align="left" mt="1rem">
              <Flex justify="space-between" flexWrap="wrap">
                <Flex align="center" gap="1rem">
                  <Image src="/savings.svg" />
                  <Box>
                    <Text
                      fontWeight="500"
                      color="#001233"
                      fontSize=".875rem"
                      lineHeight="24px"
                    >
                      Savings
                    </Text>
                    <Text fontSize=".875rem" lineHeight="24px">
                      20%
                    </Text>
                  </Box>
                </Flex>
                <Text>
                  <Box fontWeight="bold" as="span">
                    ₦10,000
                  </Box>
                  <Box color="#c1c4cd" as="span">
                    /₦24,000
                  </Box>
                </Text>
              </Flex>
            </VStack>
          </Box>
        </Box>
      </Box>
      <Box position="fixed" bottom="0" bg="white" minH="87px" w="100%" p="1rem">
        <Wrap justify="space-between" flexWrap="wrap" alignItems="center">
          <VStack>
            <Image src="/home.png" />
            <Text
              color="#C1C4CD"
              fontSize=".75rem"
              fontWeight="450"
              lineHeight="15.18px"
            >
              Home
            </Text>
          </VStack>
          <VStack>
            <Image src="/file.png" />
            <Text
              color="#C1C4CD"
              fontSize=".75rem"
              fontWeight="450"
              lineHeight="15.18px"
            >
              Reports
            </Text>
          </VStack>
          <VStack>
            <Circle size="25px" border="2px solid #e5e5e5">
              <Center>
                <Image src="/T.png" />
              </Center>
            </Circle>
            <Text
              color="#C1C4CD"
              fontSize=".75rem"
              fontWeight="450"
              lineHeight="15.18px"
            >
              Chat
            </Text>
          </VStack>
          <VStack>
            <Image src="/budget.png" />
            <Text
              color="#001233"
              fontSize=".75rem"
              fontWeight="450"
              lineHeight="15.18px"
            >
              Budget
            </Text>
          </VStack>
          <VStack>
            <Image src="/profile.png" />
            <Text
              color="#C1C4CD"
              fontSize=".75rem"
              fontWeight="450"
              lineHeight="15.18px"
            >
              Profile
            </Text>
          </VStack>
        </Wrap>
      </Box>
    </div>
  );
};

export default App;
