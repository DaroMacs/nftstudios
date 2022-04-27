import { Text, Flex, Heading, VStack, Stack } from '@chakra-ui/react';
import ButtonWallet from './utils/ButtonWallet';
import vitalik from './assets/images/vitalik.png';
import unicorn from './assets/images/unicorn.png';
import daft from './assets/images/daft.png';
import { motion } from 'framer-motion';
import ImagePixeled from './utils/ImagePixeled';
import {
	fadeLeft,
	fadeButton,
	fadeTop1,
	fadeTop2,
	fadeTop3,
} from './components/variants';

const Hero = () => {
	return (
		<Flex justifyContent={'center'} alignItems={'center'} h='100vh'>
			<Flex w={'full'} justifyContent='space-evenly'>
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
							size='4xl'
							letterSpacing={'wide'}
						>
							Pixel Chain
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

				<Stack gap={8}>
					<motion.div
						variants={fadeTop1}
						initial='hidden'
						animate='visible'
						transition={{ duration: 1 }}
					>
						<ImagePixeled
							src={daft}
							top={'70px'}
							right={'30px'}
							position={'relative'}
						/>
					</motion.div>
					<motion.div
						variants={fadeTop2}
						initial='hidden'
						animate='visible'
						transition={{ duration: 1.1 }}
					>
						<ImagePixeled
							src={vitalik}
							top={'-10px'}
							right={'-20px'}
							position={'relative'}
						/>
					</motion.div>
					<motion.div
						variants={fadeTop3}
						initial='hidden'
						animate='visible'
						transition={{ duration: 1.2 }}
					>
						<ImagePixeled
							src={unicorn}
							top={'-80px'}
							right={'30px'}
							position={'relative'}
						/>
					</motion.div>
				</Stack>
			</Flex>
		</Flex>
	);
};

export default Hero;
