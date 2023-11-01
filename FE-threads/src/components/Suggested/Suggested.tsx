import { Box, Card, Stack, Text, Avatar } from "@chakra-ui/react"
import SuggestedBase from "@/features/threads/components/SuggestedBase"

function SuggestedComponent() {
    return (
        <Card bg="whiteAlpha.200" p={4} >
            <Text color="white">Suggested for you</Text>
            <Box mt={3}>
                <Stack>
                    <SuggestedBase name="Muhammad Jawir" status="Follow" username="@jawiraja" />
                    <SuggestedBase name="Mursid Ngawi" status="Follow" username="@ngawimusical" />
                    <SuggestedBase name="Rusdi Bilek" status="Follow" username="@mamangrusdi69" />
                </Stack>
            </Box>
        </Card>
    )
}

export default SuggestedComponent