import { Avatar, Box, Button, Card, Flex, HStack, Stack, Text } from "@chakra-ui/react"

function ProfileComponent() {
    return (
        <Card bg="whiteAlpha.200" p={4}>
            <Text color="white">My Profile</Text>
            <Box
                pos="relative"
                h="70px"
                mt={3}
                rounded="xl"
                bg=  "linear-gradient(to top, #095A89 0%, #36ABEF 100%)"
            >
                <Box
                    pos="absolute"
                    bottom={-6}
                    left={4}
                    p={1}
                    bg="blackAlpha.800"
                    rounded="full"
                >
                    <Avatar size="md" src="https://th.bing.com/th/id/OIP.XaRTc0U8hrj3E-eZbN7ROQHaLH?pid=ImgDet&rs=1 " />
                </Box>
            </Box>
            <Flex justify="right" mt={-6}>
                <Button
                    color="white"
                    size="xs"
                    rounded="full"
                    variant="outline"
                    mt={8}
                    w="fit-content"
                    _hover={{ bg: 'gray' }}
                >
                    Edit Profile
                </Button>
            </Flex>

            <Stack spacing={0}>
                <Text mt={3} fontSize="lg" fontWeight="semibold" color="white">
                    ✨Ahmad Yusril✨
                </Text>
                <Text fontSize='xs' color='whiteAlpha.600'>@ahmadyusril</Text>
                <Text fontSize='sm' color='whiteAlpha.800'>Peminat nomor satu Furina</Text>
                <HStack fontSize='sm'>
                    <HStack>
                        <Text color='whiteAlpha.800'>100</Text>
                        <Text color='whiteAlpha.600'>Following</Text>
                    </HStack>
                    <HStack>
                        <Text color='whiteAlpha.800'>5000</Text>
                        <Text color='whiteAlpha.600'>Followers</Text>
                    </HStack>
                </HStack>
            </Stack>
        </Card>
    )
}

export default ProfileComponent