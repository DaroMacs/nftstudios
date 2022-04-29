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
import { motion } from 'framer-motion';

export default function Card(props: NFT) {
	const { name, image_url, permalink } = props;

	return (
		<motion.div whileHover={{ scale: 1.03 }}>
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
								<motion.div whileHover={{ scale: 1.07 }}>
									<Image
										rounded={'lg'}
										height={150}
										width={200}
										objectFit={'cover'}
										src={image_url}
									/>
								</motion.div>
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
						</Stack>
					</Box>
				</Center>
			</Box>
		</motion.div>
	);
}
