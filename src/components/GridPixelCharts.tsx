import { Grid, Heading, Box, VStack } from '@chakra-ui/react';
import { useEffect, useState, useRef } from 'react';
import Card from '../utils/Card';

export interface NFT {
	key: string;
	name: string;
	token_id: string;
	image_url: string;
	permalink: string;
}

const GridPixelCharts = () => {
	const [nftsData, setNftsData] = useState([]);

	// const myRef = useRef();

	// useEffect(() => {
	// 	console.log('myRef', myRef.current);
	// }, [myRef]);

	useEffect(() => {
		const fetchAPI = async () => {
			const url =
				'https://api.opensea.io/api/v1/assets?order_direction=desc&asset_contract_address=0x9e1f3e8db4d1119894624632499eaed1e56d2b1d&limit=40&include_orders=false';
			const response = await fetch(url);
			const result = await response.json();

			const arrayAssets = result.assets.map((nft: NFT) => {
				const nftsObject = {
					key: nft.token_id,
					name: nft.name,
					token_id: nft.token_id,
					image_url: nft.image_url,
					permalink: nft.permalink,
				};
				return nftsObject;
			});
			setNftsData(arrayAssets);
		};

		fetchAPI();
	}, []);

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
					{nftsData.map((nft: NFT) => (
						<Card
							key={nft.token_id}
							name={nft.name}
							image_url={nft.image_url}
							token_id={nft.token_id}
							permalink={nft.permalink}
						/>
					))}
					{/* <Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card /> */}
				</Grid>
			</VStack>
		</Box>
	);
};

export default GridPixelCharts;
