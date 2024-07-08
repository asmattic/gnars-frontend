import { Link } from "@chakra-ui/next-js"
import { ButtonGroup, Container, HStack, IconButton, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react"
import {
  OG_GNAR_ADDRESS,
  BASE_TREASURY_ADDRESS,
  BASE_GNAR_ADDRESS,
  BASE_AUCTION_HOUSE_ADDRESS,
  BASE_MULTISIG_ADDRESS,
  BASE_GOVERNOR_ADDRESS,
} from "constants/gnarsDao"
import { GNARS_HD_ADDRESS } from "constants/gnarsHD"
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa"
import { GnarsLogo } from "./GnarsLogo"

const links = [
  {
    title: "Gnars DAO",
    links: [
      { label: "Auction", href: "/" },
      { label: "Claim Gnars", href: "/claim" },
      { label: "Gnars Playground", href: "/playground" },
      { label: "Propose Onchain", href: "/dao/proposals/new" },
      { label: "Onchain Proposals", href: "/dao" },
      {
        label: "Offchain Proposals",
        href: "https://snapshot.org/#/gnars.eth",
      },
      {
        label: "Prop House",
        href: "https://prop.house/gnars",
      },
    ],
  },
  {
    title: "Contracts",
    links: [
      {
        label: "Gnars NFT",
        href: `https://basescan.org/address/${BASE_GNAR_ADDRESS}`,
      },
      {
        label: "Gnars Auction House",
        href: `https://basescan.org/address/${BASE_AUCTION_HOUSE_ADDRESS}`,
      },
      {
        label: "Gnars Treasury",
        href: `https://basescan.org/address/${BASE_TREASURY_ADDRESS}`,
      },
      {
        label: "Gnars Safe",
        href: `https://app.safe.global/home?safe=base:${BASE_MULTISIG_ADDRESS}`,
      },
      {
        label: "Gnars DAO",
        href: `https://basescan.org/address/${BASE_GOVERNOR_ADDRESS}`,
      },
      {
        label: "Gnars Mainnet OG NFT",
        href: `https://etherscan.io/address/${OG_GNAR_ADDRESS}`,
      },
      {
        label: "Gnars Mainnet HD NFT",
        href: `https://etherscan.io/address/${GNARS_HD_ADDRESS}`,
      },
    ],
  },
  {
    title: "Gnars ecosystem",
    links: [
      { label: "Settle.wtf", href: "https://www.settle.wtf" },
      { label: "Gnars.com", href: "https://gnars.com/" },
      { label: "That's Gnarly", href: "https://thatsgnar.ly/" },
    ],
  },
]

export default function Footer() {
  return (
    <Container
      maxW={"container.lg"}
      as="footer"
      role="contentinfo"
      bg="bg.surface"
      color={"chakra-body-text"}
      w={"full"}
      px={{ base: 4, md: 8 }}
    >
      <Stack
        w={"full"}
        justify="space-between"
        align="start"
        direction={{ base: "column", lg: "row" }}
        py={{ base: "6", md: "10" }}
        spacing="16"
      >
        <SimpleGrid
          flexGrow={1}
          as={"nav"}
          // px={{ base: 10, sm: 0 }}
          columns={{ base: 2, sm: 3 }}
          justifyItems={"start"}
          gap="8"
          width={{ base: "full", lg: "auto" }}
        >
          {links.map((group, idx) => (
            <Stack key={idx} spacing="4" minW={{ lg: "40" }}>
              <Text fontSize="md" fontWeight="bold" color="fg.subtle">
                {group.title}
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                {group.links.map((link, idx) => (
                  <Link key={idx} variant="text" colorScheme="gray" href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
        <VStack w={{ base: "full", lg: "fit-content" }} spacing={{ base: "4", md: "5" }}>
          <HStack
            w={{ base: "full", lg: "fit-content" }}
            justify={{ base: "space-between", lg: "start" }}
            spacing="16"
            align="center"
          >
            <GnarsLogo />
            <ButtonGroup variant="tertiary" as={"nav"}>
              <IconButton
                as="a"
                rel="external noopener"
                href="https://discord.gg/XBeZuMxmst"
                aria-label="Discord"
                icon={<FaDiscord fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                rel="external noopener"
                href="https://github.com/gnarsdao"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                rel="external noopener"
                href="https://twitter.com/gnars_dao"
                aria-label="Twitter"
                icon={<FaTwitter fontSize="1.25rem" />}
              />
            </ButtonGroup>
          </HStack>
          <Text fontSize="sm" color="fg.subtle">
            CC0 {new Date().getFullYear()} Gnars DAO
          </Text>
        </VStack>
      </Stack>
    </Container>
  )
}
