import { Container, Text, VStack, Heading, Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Welcome to RecipeShare</Heading>
        <Box boxSize="sm">
          <Image src="/images/recipe.jpg" alt="Delicious food" borderRadius="md" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Discover and share amazing recipes from around the world. Whether you're a seasoned chef or just starting out, you'll find something to inspire your culinary journey.
        </Text>
        <Button as={Link} to="/recipes" colorScheme="teal" size="lg" mt={4}>
          Explore Recipes
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;