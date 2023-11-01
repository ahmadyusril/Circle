import {
    Avatar,
    Box,
    Button,
    Card,
    Flex,
    Grid,
    GridItem,
    HStack,
    Image,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    useDisclosure,

} from "@chakra-ui/react";
import NavbarComponent from "@/components/Navbar/Navbar";
import ProfileComponent from "@/components/ProfilePage/Profile";
import ThreadComponent from "@/components/ThreadPage/Thread";
import SuggestedComponent from "@/components/Suggested/Suggested";

import ThreadBase from "@/features/threads/components/ThreadBase";

import { BsDot, BsFacebook, BsArrowLeftShort } from "react-icons/bs";
import { BiImageAdd } from "react-icons/bi";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { useState, useEffect } from "react";
// import data from '../../mocks/thread.json'
import { API } from "@/config/api";
import { ThreadType } from "@/types/ThreadType";
import { ChangeEvent } from "react";
// import { useNavigate } from "react-router-dom";

type formInputData = {
    content: string;
};


function Home() {
    // const navigate = useNavigate();

    const [detail, setDetail] = useState(false);
    const [data, setData] = useState([]);
    const [form, setForm] = useState<formInputData>({
        content: "",
    });
    const [image, setImage] = useState<File | null>(null);
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        const fetchData = async () => {
            const response = await API.get("/threads");
            // console.log(response);

            setData(response.data); 
            
        };
        fetchData();
    }, []);
    // console.log(data)

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    async function handlePost() {
        console.log(form);
        const formData = new FormData();
        if (image) {
            formData.append("image", image);
        }   
        formData.append("content", form.content);
        await API.post("/thread", formData);
        // this.fetchData()
        // refetch()
    }

    console.log(data);


    return (
        <>
            <Grid gridTemplateColumns="270px 1.5fr 1.1fr" bg="blackAlpha.800" h="100vh" >

                <GridItem px={6} py={4} borderRight="1px solid gray">
                    <NavbarComponent />
                </GridItem>

                {detail === false && (
                    <GridItem overflowY="auto" px={6} py={4} borderRight="1px solid gray">

                        <Text color="white" fontSize="lg">
                            Home
                        </Text>

                        <HStack mt={5} justify="space-between">

                            <HStack>
                                <Avatar size="sm" mr={3} />
                                <Input
                                    variant="unstyled"
                                    color="whiteAlpha.400"
                                    placeholder="What is happening?!"
                                    _focus={{ color: 'white' }}
                                    name="content"
                                    onChange={handleChange}
                                />

                            </HStack>

                            <HStack>
                                <Box
                                    cursor="pointer"
                                    onClick={onOpen}>
                                    <BiImageAdd size={25} color="green" />
                                </Box>
                                <Button
                                    colorScheme="whatsapp"
                                    size="xs" px={3}
                                    rounded="full"
                                    onClick={handlePost}>
                                    Post
                                </Button>

                            </HStack>

                        </HStack>

                        <Stack mt={6}>
                            {
                                data?.map((e: ThreadType) => (
                                    <ThreadBase
                                        key={e.id}
                                        id={e.id}
                                        content={e.content}
                                        image={e.image}
                                        user={e.user}
                                        replies={e.replies}
                                        likes={e.likes}
                                        created_at="{e.created_at}"
                                    />
                                ))
                            }
                        </Stack>
                    </GridItem>
                )}

                {detail && (
                    <GridItem borderRight="1px solid gray" px={6} py={6}>
                        <HStack
                            color="white"
                            onClick={() => setDetail(false)}
                            cursor="pointer"
                        >
                            <BsArrowLeftShort size={24} />
                            <Text>Status</Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Necessitatibus tempore rerum quae repellat hic explicabo architecto
                            eos nemo quod suscipit.
                        </HStack>
                        <Box mt={6}>
                            <ThreadComponent />
                        </Box>
                    </GridItem>
                )}

                <GridItem px={6} py={4} >
                    <ProfileComponent />
                    <Box mt={4}>
                        <SuggestedComponent />

                        <Card mt={4} bg="whiteAlpha.200" p={3}>
                            <Flex>
                                <Text display="flex" fontSize="sm" gap={1} color="whiteAlpha.800">
                                    Developed by <Text color="white">Your Name</Text>
                                </Text>
                                <Flex gap="3px" color="gray">
                                    <BsDot size={24} />
                                    <AiFillGithub size={20} />
                                    <AiFillLinkedin size={20} />
                                    <BsFacebook size={20} />
                                    <AiFillInstagram size={20} />
                                </Flex>
                            </Flex>
                            <Text
                                fontSize="x-small"
                                color="whiteAlpha.600"
                                display="flex"
                                gap={2}
                            >
                                Powered by <Image w="30px" src="src/assets/logo.png" alt="logo" />{" "}
                                Dumbways Indonesia #1Coding Bootcamp
                            </Text>
                        </Card>
                    </Box>
                </GridItem>
            </Grid>

            {/* Untuk pop up agar bisa upload image */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Image Upload</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input
                            marginLeft={2}
                            variant="unstyled"
                            type="file"
                            name="image"
                            onChange={(e) => {
                                if (e.target?.files) {
                                    setImage(e.target?.files[0])
                                } else {
                                    setImage(null)
                                }
                            }} />
                    </ModalBody>

                    <ModalFooter gap={3}>
                        <Button colorScheme='whatsapp' onClick={handlePost}>
                            Post
                        </Button>
                        
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default Home;
