import { Box, Flex, HStack, Link, Image, Text } from '@chakra-ui/react';
import logoPixelChain from '../assets/images/logo_pixelchain.png';
import ButtonWallet from '../utils/ButtonWallet';

export default function Navbar() {
	return (
		<Box
			w={'100%'}
			bg={'rgba(27, 22, 22, 0.6)'}
			boxShadow='2xl'
			position={'fixed'}
			zIndex={'sticky'}
			pl={{ base: '30px', md: 0 }}
		>
			<Flex h={16} alignItems={'center'} justifyContent={'space-around'}>
				<HStack spacing={1} alignItems={'center'}>
					<Box boxSize='35px' display={{ base: 'none', md: 'block' }}>
						<Image rounded={'md'} src={logoPixelChain} objectFit='cover' />
					</Box>
					<Link
						px={2}
						href='https://pixelchain.art/'
						fontSize='md'
						color={'whiteAlpha.800'}
						_hover={{
							rounded: 'md',
							textDecoration: 'none',
							color: '#c997e6',
						}}
						isExternal
					>
						<Text fontSize={'lg'}>PixelChain Collection</Text>
					</Link>
				</HStack>
				<ButtonWallet btnText='Connect Wallet' />
			</Flex>
		</Box>
	);
}
