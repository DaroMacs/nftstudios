import {
	Box,
	Center,
	useColorModeValue,
	Heading,
	Text,
	Stack,
	Image,
	Link,
} from '@chakra-ui/react';
import daft from '../assets/images/daft.png';

export default function Card() {
	return (
		<Box>
			<Center py={7}>
				<Box
					role={'group'}
					p={6}
					maxW={'200px'}
					w={'full'}
					bg={useColorModeValue('white', 'gray.800')}
					boxShadow={'2xl'}
					rounded={'lg'}
					pos={'relative'}
					zIndex={1}
				>
					<Box
						rounded={'lg'}
						mt={-12}
						pos={'relative'}
						height={'150px'}
						_after={{
							transition: 'all .3s ease',
							content: '""',
							w: 'full',
							h: 'full',
							pos: 'absolute',
							top: 5,
							left: 0,
							backgroundImage: `url(${daft})`,
							filter: 'blur(15px)',
							zIndex: -1,
						}}
						_groupHover={{
							_after: {
								filter: 'blur(20px)',
							},
						}}
					>
						<Link href='https://chakra-ui.com/link' isExternal>
							<Image
								rounded={'lg'}
								height={150}
								width={200}
								objectFit={'cover'}
								src={daft}
							/>
						</Link>
					</Box>
					<Stack pt={10} align={'left'}>
						<Text
							color={'gray.500'}
							fontSize={'sm'}
							textTransform={'uppercase'}
						>
							Name
						</Text>
						<Link href='https://chakra-ui.com/link' isExternal>
							<Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
								Daft Punk
							</Heading>
						</Link>
					</Stack>
				</Box>
			</Center>
		</Box>
	);
}
