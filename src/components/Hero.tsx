import { Text, Flex, Heading, VStack, Stack, Box } from '@chakra-ui/react';
import ButtonWallet from '../utils/ButtonWallet';
import Label from '../utils/Label';
import vitalik from '../assets/images/vitalik.png';
import unicorn from '../assets/images/unicorn.png';
import daft from '../assets/images/daft.png';
import { motion } from 'framer-motion';
import ImagePixeled from '../utils/ImagePixeled';
import { fadeLeft, fadeButton, fadeTop1, fadeTop2, fadeTop3 } from './variants';

const Hero = () => {
	return (
		<Box p={{ base: '15px', md: 0 }}>
			<Flex
				paddingTop={'150px'}
				w={'full'}
				justifyContent='space-evenly'
				direction={{ base: 'column', md: 'row' }}
			>
				<VStack alignItems={'start'} justifyContent={'center'}>
					<motion.div
						variants={fadeLeft}
						initial='hidden'
						animate='visible'
						transition={{ duration: 1 }}
					>
						<Heading
							bgGradient='linear(to top left, #286375 25%, #9524C8 100%)'
							bgClip='text'
							as='h1'
							fontSize={{ base: '4xl', md: '7xl' }}
							letterSpacing={'wide'}
						>
							PixelChain
							<br />
							Collection 2.0
						</Heading>
					</motion.div>
					<motion.div
						variants={fadeLeft}
						initial='hidden'
						animate='visible'
						transition={{ duration: 1.2 }}
					>
						<Text
							fontWeight={'bold'}
							// letterSpacing={1}
							fontSize='sm'
							color={'whiteAlpha.800'}
							pb={5}
						>
							Visualize all Pixel Chain&apos;s NFTs in one place!
						</Text>
					</motion.div>
					<motion.div
						variants={fadeButton}
						initial='hidden'
						animate='visible'
						transition={{ duration: 1.6 }}
					>
						<ButtonWallet btnText='Get Started' />
					</motion.div>
				</VStack>

				<Stack
					gap={{ base: 2, md: 8 }}
					my={{ base: '-50px', md: 0 }}
					alignItems='center'
				>
					<motion.div variants={fadeTop1} initial='hidden' animate='visible'>
						<ImagePixeled
							src={daft}
							top={'70px'}
							right={'30px'}
							position={'relative'}
						/>
					</motion.div>
					<motion.div variants={fadeTop2} initial='hidden' animate='visible'>
						<ImagePixeled
							src={vitalik}
							top={'-10px'}
							right={'-20px'}
							position={'relative'}
						/>
					</motion.div>
					<motion.div variants={fadeTop3} initial='hidden' animate='visible'>
						<ImagePixeled
							src={unicorn}
							top={'-80px'}
							right={'30px'}
							position={'relative'}
						/>
					</motion.div>
				</Stack>
			</Flex>
			<Label />
		</Box>
	);
};

export default Hero;
