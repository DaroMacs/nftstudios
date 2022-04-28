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
import { NFT } from '../components/GridPixelCharts';

export default function Card(props: NFT) {
	console.log(props);

	const { name, token_id, image_url, permalink } = props;

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
							backgroundImage: `url(${image_url})`,
							filter: 'blur(15px)',
							zIndex: -1,
						}}
						_groupHover={{
							_after: {
								filter: 'blur(20px)',
							},
						}}
					>
						<Link href={permalink} isExternal>
							<Image
								rounded={'lg'}
								height={150}
								width={200}
								objectFit={'cover'}
								src={image_url}
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
						<Link href={permalink} isExternal>
							<Heading
								fontSize={'lg'}
								fontFamily={'body'}
								fontWeight={500}
								isTruncated
							>
								{name}
							</Heading>
						</Link>
						<Text
							color={'gray.500'}
							fontSize={'sm'}
							textTransform={'uppercase'}
						>
							Token ID
						</Text>
						<Heading fontSize={'xs'} fontFamily={'body'} fontWeight={300}>
							{token_id}
						</Heading>
					</Stack>
				</Box>
			</Center>
		</Box>
	);
}
