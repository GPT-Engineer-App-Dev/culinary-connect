import { Container, Text, VStack, Heading, Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Recipe Share</Heading>
        <Text fontSize="lg">Discover and share amazing recipes from around the world.</Text>
        <Box boxSize="sm">
          <Image src="/images/recipe-hero.jpg" alt="Delicious food" objectFit="cover" borderRadius="md" />
        </Box>
        <Button as={Link} to="/recipes" colorScheme="teal" size="lg">Explore Recipes</Button>
      </VStack>
    </Container>
  );
};

export default Index;