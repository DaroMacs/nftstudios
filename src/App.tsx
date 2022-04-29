import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GridPixelCharts from './components/GridPixelCharts';
import { ethers } from 'ethers';
import useTruncatedAddress from './components/customHooks/useTruncatedAddress';

export interface Connect {
	connect: () => Promise<void>;
	truncatedAddress?: string;
	account?: string;
	isConnected?: boolean;
	disconnect?: () => void;
}

function App() {
	const [isConnected, setIsConnected] = useState(false);
	const [account, setAccount] = useState('');

	const connect = async () => {
		try {
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			if (!window.ethereum) throw new Error('No crypto wallet found');
			let response = await provider.send('eth_requestAccounts', []);
			setAccount(response[0]);
			setIsConnected(true);
		} catch (err: any) {
			console.log(err.message);
		}
	};

	const disconnect = () => {
		const isConfirmed = confirm(
			'Are you sure you want to disconnect your wallet?'
		);
		if (isConfirmed) {
			setIsConnected(false);
			setAccount('');
			location.reload();
		}
	};

	const truncatedAddress: string = useTruncatedAddress(account);

	return (
		<Box
			bgGradient='linear(to left bottom, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #85a0e1, #74a4de, #67a8d7, #5ba6c7, #59a2b5, #5e9da4, #669794)'
			minH={'100vh'}
		>
			<Navbar
				connect={connect}
				account={account}
				truncatedAddress={truncatedAddress}
				isConnected={isConnected}
				disconnect={disconnect}
			/>
			{!isConnected ? <Hero connect={connect} /> : <GridPixelCharts />}
		</Box>
	);
}

export default App;
