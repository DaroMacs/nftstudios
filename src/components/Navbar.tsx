import { ReactNode } from 'react';
import { Box, Flex, HStack, Link, Image, Text } from '@chakra-ui/react';
import logoPixelChain from '../assets/images/logo_pixelchain.png';
import ButtonWallet from '../utils/ButtonWallet';

const NavLink = ({ children }: { children: ReactNode }) => (
	<Link
		px={2}
		py={1}
		rounded={'md'}
		_hover={{
			textDecoration: 'none',
			bg: '#e0d4f4',
			color: '#5f4cd8',
		}}
		href={'#'}
		// fontWeight='bold'
		fontSize='md'
		color={'whiteAlpha.800'}
	>
		{children}
	</Link>
);

export default function Navbar() {
	return (
		<>
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
						<NavLink>
							<Text fontSize={'lg'} fontWeight='bold'>
								PixelChain-Collection
							</Text>
						</NavLink>
					</HStack>
					<ButtonWallet btnText='Connect Wallet' />
				</Flex>
			</Box>
		</>
	);
}
