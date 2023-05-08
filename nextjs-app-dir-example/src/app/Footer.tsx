import { Container, Box, Text } from "../components/chakraUi";

export default function Footer() {
  return (
    <Box bg="gray.50" color="gray.700" as="footer">
      <Container maxW="5xl" py={4}>
        <Text as="small">sample</Text>
      </Container>
    </Box>
  );
}