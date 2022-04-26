import { ReactNode } from 'react';
import {
	Box,
	Flex,
	HStack,
	Link,
	IconButton,
	useDisclosure,
	Image,
	Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
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

export default function Simple() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Box
				position={'fixed'}
				w={'100%'}
				bg={'rgba(67, 54, 54, 0.4)'}
				px={4}
				boxShadow='2xl'
			>
				<Flex h={16} alignItems={'center'} justifyContent={'space-around'}>
					<IconButton
						size={'md'}
						icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
						aria-label={'Open Menu'}
						display={{ md: 'none' }}
						onClick={isOpen ? onClose : onOpen}
					/>
					<HStack spacing={1} alignItems={'center'}>
						<Box boxSize='35px'>
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
