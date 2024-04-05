import { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  useDisclosure,
  Link as ExternalLink,
  VStack,
  Text,
  Alert,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import TextLink from "./TextLink"
import { FiExternalLink } from "react-icons/fi"

export const BaseAnnouncementModal = ({ ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hasOpened, setHasOpened] = useState(false);

  useEffect(() => {
    const timestamp = localStorage.getItem('modalLastOpened');
    const now = new Date().getTime();

    // Open modal on the first visit or if it hasn't been opened in the last 24 hours
    if (!timestamp || now - parseInt(timestamp, 10) > 24 * 60 * 60 * 1000 && !hasOpened) {
      onOpen();
      localStorage.setItem('modalLastOpened', now.toString());
      setHasOpened(true);
      console.log(`set has opened to false`, isOpen, timestamp);
    }
  }, [onOpen]);

  return (
    <Modal
      {...props}
      isCentered
      isOpen={isOpen}
      onClose={onClose}
      scrollBehavior={"inside"}
      closeOnEsc
      closeOnOverlayClick
    >
      <ModalOverlay />
      <ModalContent
        m={4}
        p={{ base: 2, sm: 4 }}
        maxW={"xl"}
        w={{ base: "full", sm: "xl" }}
        color={"chakra-body-text"}
      >
        <ModalHeader textAlign={"center"} textStyle={"h2"}>Gnars have BASE Jumped!</ModalHeader>
        <ModalCloseButton onClick={onClose} />
        <ModalBody>
          <VStack spacing={10}>
            <VStack alignItems={"start"} spacing={0} alignSelf={"start"}>
              <Text>
                We&apos;re currently updating this site to be fully operational on Base. In the meantime, auctions and governance are live on Base <TextLink href="https://nouns.build/dao/base/0x880Fb3Cf5c6Cc2d7DFC13a993E839a9411200C17">here</TextLink>.
              </Text>
              <br />
              <Text>
                If you owned Gnars V2 on mainnet at <TextLink href="https://etherscan.io/block/19325750">block 19325750</TextLink>, you were airdropped the equivalent Gnars on Base <b>(check your hidden folder on OpenSea)</b>.
              </Text>
              <br />
              <Text>Stay tuned. Stay gnarly. ⌐◨-◨</Text>
            </VStack>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <ExternalLink
            href={`https://nouns.build/dao/base/0x880fb3cf5c6cc2d7dfc13a993e839a9411200c17`} isExternal
            rel="noopener noreferrer">
            <Button w={"fit-content"} variant={"outline"} rightIcon={<FiExternalLink />} >BASE JUMP!
            </Button>
          </ExternalLink>
        </ModalFooter>
      </ModalContent >
    </Modal >
  );
};


export const BaseAlertHeader = () => {
  const { } = useDisclosure({ defaultIsOpen: true })

  return (
    <Alert variant='solid' style={{ marginBottom: '-40px', flexGrow: 1, alignItems: 'center', background: '#FFE762' }}>
      <Box flexGrow={1} alignContent={'center'}>
        <AlertTitle textAlign={'center'} textStyle={"h2"} py={2}>Gnars have BASE Jumped!</AlertTitle>
        <AlertDescription textAlign={'center'}>
          <Text >
            We&apos;re currently updating this site to be fully operation on Base. Stay tuned. ⌐◨-◨\m/
          </Text>
        </AlertDescription>
      </Box>
      <ExternalLink
        isExternal
        href={`https://nouns.build/dao/base/0x880fb3cf5c6cc2d7dfc13a993e839a9411200c17`}
        rel="noopener noreferrer">
        <Button
          w={"fit-content"}
          variant={"outline"}
          style={{ borderColor: "#1A202C", color: '#1A202C' }}
          rightIcon={<FiExternalLink />}
        >
          BASE JUMP!
        </Button>
      </ExternalLink>
    </Alert >
  )
}