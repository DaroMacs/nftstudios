import {
	Text,
	Flex,
	Heading,
	VStack,
	Image,
	Box,
	Stack,
} from '@chakra-ui/react';
import ButtonWallet from './utils/ButtonWallet';
import vitalik from './assets/images/vitalik.png';
import unicorn from './assets/images/unicorn.png';
import daft from './assets/images/daft.png';
import { motion } from 'framer-motion';
import ImagePixeled from './utils/ImagePixeled';
import { fadeLeft } from './components/variants';
import { initial } from 'lodash';

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
						<Text
							fontWeight={'bold'}
							fontSize='sm'
							color={'whiteAlpha.800'}
							pb={5}
						>
							Visualize all Pixel Chain&apos;s NFTs in one place!
						</Text>
					</motion.div>
					<ButtonWallet btnText='Get Started' />
				</VStack>
				<Stack gap={8}>
					<ImagePixeled
						src={daft}
						top={'30px'}
						right={'30px'}
						position={'relative'}
					/>
					<ImagePixeled
						src={vitalik}
						top={'-50px'}
						right={'-20px'}
						position={'relative'}
					/>
					<ImagePixeled
						src={unicorn}
						top={'-120px'}
						right={'30px'}
						position={'relative'}
					/>
				</Stack>
			</Flex>
		</Flex>
	);
};

export default Hero;
