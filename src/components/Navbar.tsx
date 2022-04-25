import { ReactNode } from 'react';
import {
	Box,
	Flex,
	Avatar,
	HStack,
	Link,
	IconButton,
	useDisclosure,
	useColorModeValue,
	Stack,
	Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import logoPixelChart from '../assets/images/logo_pixelchain.png';
import MetaMaskLogo from '../assets/images/MetaMask_Fox.png';

const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children }: { children: ReactNode }) => (
	<Link
		px={2}
		py={1}
		rounded={'md'}
		_hover={{
			textDecoration: 'none',
			bg: useColorModeValue('gray.200', 'gray.700'),
		}}
		href={'#'}
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
						<Box boxSize='50px'>
							<Image rounded={'md'} src={logoPixelChart} objectFit='cover' />
						</Box>
						<NavLink>PixelChain Collection</NavLink>
					</HStack>
					<Flex alignItems={'center'}>
						<NavLink>
							<Flex alignSelf={'center'} justifyContent={'center'}>
								<Avatar
									justifyContent={'center'}
									size={'sm'}
									src={MetaMaskLogo}
								/>
								<Box p={1}>Connect Wallet</Box>
							</Flex>
						</NavLink>
					</Flex>
				</Flex>

				{isOpen ? (
					<Box pb={4} display={{ md: 'none' }}>
						<Stack as={'nav'} spacing={4}>
							{Links.map(link => (
								<NavLink key={link}>{link}</NavLink>
							))}
						</Stack>
					</Box>
				) : null}
			</Box>
		</>
	);
}
