import { Avatar, Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { BsDot } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { useState } from "react";
import { ThreadType } from "@/types/ThreadType";
import getPostedTime from "@/utils/getPostedTime";
import { Link } from "react-router-dom";

function ThreadBase(props: ThreadType) {
    const { content, image, user, replies, likes, created_at, id } = props;
    const [like, setLike] = useState(false);

    function handleLike() {
        setLike(!like);
    }

    return (
        <Flex gap={3} borderBottom='1px solid gray' >

            <Avatar size="sm" src={user.profile_picture} />

            <Box mb={4}>
                <HStack>
                    <Text
                        display="flex"
                        gap={1}
                        fontSize="sm"
                        fontWeight="semibold"
                        color="whiteAlpha.800"
                        cursor='pointer'
                    >
                        {user.full_name}
                        <Text fontWeight="light" display="flex" color="whiteAlpha.600">
                            @{user.username} <BsDot color="gray" size={24} />
                            <Text>{getPostedTime(created_at)}</Text>
                        </Text>
                    </Text>
                </HStack>

                <Text fontSize="xs" color="whiteAlpha.800" fontWeight='light' mb={2}>
                    {content}
                </Text>

                {image && <Image src={image} />}

                <HStack spacing={6}>
                    <HStack
                        onClick={handleLike}
                        cursor="pointer"
                        color="whiteAlpha.600"
                        mt={2}
                    >
                        <AiFillHeart size={20} color={like ? "red" : ""} />
                        <Text fontSize="sm" color="whiteAlpha.600">
                            {likes?.length}
                        </Text>
                    </HStack>

                    <Link to={`/thread/${id}`}>
                    <HStack cursor="pointer" color="whiteAlpha.600" mt={2}>
                        <BiCommentDetail size={20} />
                        <Text fontSize="sm" color="whiteAlpha.600">
                            {replies?.length}
                        </Text>
                    </HStack>
                    </Link>
                </HStack>

            </Box>

        </Flex>
    );
}

export default ThreadBase;