
import { Link, Container, Button, Heading, Box, Image, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioYear, BioSection } from '../components/bio'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'

const Page = () => {
    return(
        <Container>
            <Box
                borderRadius="lg"
                mb={6}
                p={3}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            >
                Hello, I&apos;m a full-stack developer based in California!
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" varient="page-title">
                        Jorge Zepeda
                    </Heading>
            <p>Latinx digital man ( Developer / Designer / Artist )</p>
                </Box>
                    <Box     
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        textAlign="center"
                    >
                        <Image  
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/takuya.jpg"
                            alt="Profile image"
                        />
                    </Box>
                </Box>

                 <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>

                    <Paragraph>
                        Jorge is a freelance and full-stack developer based in Lodi, California. As a new
                        graduate with a passion for building software, he is on the look for
                        opportunities at companies that match his goals. He has a knack for launching
                        products, from planning and designing, all the way to solving real life problems
                        with code. When not online, he loves music production and all things music.
                    </Paragraph>
                     
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                My portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>

                    <BioSection>
                        <BioYear>1995</BioYear>
                        Born in Los Angeles, California
                    </BioSection>

                    <BioSection>
                        <BioYear>2021</BioYear>
                        Research Assistant Internship at University of the Pacific
                    </BioSection>

                    <BioSection>
                        <BioYear>2021</BioYear>
                        Graduated from University of The Pacific with a B.S in Computer Science
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        I ♥
                    </Heading>
                        <Paragraph>
                            Art, {' '}
                            <Link href="https://open.spotify.com/artist/6dlHV1kVvYvq6kTCVm8oBj?si=hNv78FL8Tb-kLzZHCgGE1Q" target="_blank">
                                Music
                            </Link>
                            , Playing Drums, Guitar, Music Production
                            , Programming
                            </Paragraph>
                </Section>

        </Container>
    )
}

export default Page