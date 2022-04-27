import { Grid, Heading, Box, VStack } from '@chakra-ui/react';
import Card from '../utils/Card';

const GridPixelCharts = () => {
	return (
		<Box>
			<Heading
				bgGradient='linear(to top right, #2b7288 25%, #9524C8 100%)'
				bgClip='text'
				as='h2'
				size='xl'
				letterSpacing={'wide'}
				textAlign={'center'}
				paddingTop={'100px'}
			>
				PixelChain
				<br />
				Collection 2.0
			</Heading>
			<VStack
				justifyContent={'center'}
				alignItems={'center'}
				paddingTop={'30px'}
			>
				<Grid
					templateColumns={{
						base: 'repeat(1, 1fr)',
						md: 'repeat(3, 1fr)',
						lg: 'repeat(4, 1fr)',
					}}
					gap={3}
					h='100%'
				>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</Grid>
			</VStack>
		</Box>
	);
};

export default GridPixelCharts;
