import { ReactNode } from 'react';
import {
	Box,
	Flex,
	Avatar,
	HStack,
	Link,
	IconButton,
	useDisclosure,
	Button,
	Image,
	Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import logoPixelChart from '../assets/images/logo_pixelchain.png';
import MetaMaskLogo from '../assets/images/MetaMask_Fox.png';

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
							<Image rounded={'md'} src={logoPixelChart} objectFit='cover' />
						</Box>
						<NavLink>
							<Text fontSize={'2xl'}>PixelChain.Collection</Text>
						</NavLink>
					</HStack>
					<Flex alignItems={'center'}>
						<Button
							bg={'none'}
							border={'1px'}
							borderColor={'whiteAlpha.800'}
							rounded='md'
							_hover={{
								textDecoration: 'none',
								bg: '#e0d4f4',
								color: '#5f4cd8',
								borderColor: '#5f4cd8',
							}}
						>
							<Flex my={'2'} alignSelf={'center'} justifyContent={'center'}>
								<Avatar
									justifyContent={'center'}
									size={'sm'}
									src={MetaMaskLogo}
								/>
								<Flex
									ps={2}
									alignItems={'center'}
									color={'whiteAlpha.800'}
									_hover={{
										color: '#5f4cd8',
									}}
								>
									Connect Wallet
								</Flex>
							</Flex>
						</Button>
					</Flex>
				</Flex>
			</Box>
		</>
	);
}
