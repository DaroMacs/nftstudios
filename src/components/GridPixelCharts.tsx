import { Grid, Heading, Box, VStack, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Card from '../utils/Card';
import Spinner from './Spinner';

export interface NFT {
	key: string;
	name: string;
	token_id: string;
	image_url: string;
	permalink: string;
}

const GridPixelCharts = () => {
	let offset = 0;
	const [nftsData, setNftsData] = useState<NFT[]>([]);
	const [loading, setLoading] = useState(false);
	const [loadingScroll, setLoadingScroll] = useState(false);

	const fetchNFTS = () => {
		setTimeout(() => {
			setLoadingScroll(false);
		}, 3000);
		setLoadingScroll(true);
		const options = {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'X-API-KEY': '0e090a5d0169429c9c96839dc9b24ec5',
			},
		};

		fetch(
			`https://api.opensea.io/api/v1/assets?order_direction=desc&asset_contract_addresses=0x9e1f3e8db4d1119894624632499eaed1e56d2b1d&limit=8&offset=${offset}`,
			options
		)
			.then(response => response.json())
			.then(response => {
				const newNFT: any = [];
				response.assets.forEach((nft: NFT) => newNFT.push(nft));

				setNftsData(oldNFT => [...oldNFT, ...newNFT]);
			})
			.catch(err => console.error(err));

		offset += 8;
	};

	const handleScroll = (e: any) => {
		console.log('top', e.target.documentElement.scrollTop);
		console.log('height', e.target.documentElement.scrollHeight);
		console.log('w2', window.innerHeight);

		if (
			window.innerHeight + e.target.documentElement.scrollTop + 1 >
			e.target.documentElement.scrollHeight
		) {
			setLoadingScroll(true);

			fetchNFTS();
		}
	};

	useEffect(() => {
		fetchNFTS();
		window.addEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
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
					</Grid>
				</VStack>
			</Box>
			{loadingScroll ? (
				<Flex justifyContent={'start'} alignItems={'center'}>
					<Spinner />
				</Flex>
			) : null}
		</>
	);
};

export default GridPixelCharts;
