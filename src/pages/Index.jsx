import React, { useState } from "react";
import { Box, Button, Container, Heading, Input, Stack, Text, VStack, useClipboard, useToast } from "@chakra-ui/react";
import { FaCopy, FaLink } from "react-icons/fa";

const Index = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const { hasCopied, onCopy } = useClipboard(shortUrl);
  const toast = useToast();

  const handleShorten = () => {
    // This is just a mock function, in a real scenario you would call an API to shorten the URL
    setShortUrl(`https://short.url/${Math.random().toString(36).substring(2, 8)}`);
  };

  const handleCopy = () => {
    onCopy();
    toast({
      title: "Copied",
      description: "Short URL copied to clipboard!",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1">URL Shortener</Heading>
        <Stack direction={{ base: "column", md: "row" }} spacing={4} width="full">
          <Input placeholder="Enter your URL here" value={url} onChange={(e) => setUrl(e.target.value)} size="md" />
          <Button colorScheme="blue" leftIcon={<FaLink />} onClick={handleShorten}>
            Shorten
          </Button>
        </Stack>
        {shortUrl && (
          <Box width="full" p={4} borderWidth="1px" borderRadius="md" textAlign="center">
            <Text as="span" fontWeight="semibold">
              Short URL:
            </Text>
            <Text as="span" color="blue.500" mx={2}>
              {shortUrl}
            </Text>
            <Button onClick={handleCopy} size="sm" colorScheme="blue" leftIcon={<FaCopy />}>
              {hasCopied ? "Copied" : "Copy"}
            </Button>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
