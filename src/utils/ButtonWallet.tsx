import { Flex, Avatar, Button } from '@chakra-ui/react';
import MetaMaskLogo from '../assets/images/MetaMask_Fox.png';

interface buttonProps {
	btnText: string;
}

const ButtonWallet = ({ btnText }: buttonProps) => {
	return (
		<Flex alignItems={'center'} me={10}>
			<Button
				bg={'none'}
				border={'1px'}
				color={'whiteAlpha.800'}
				borderColor={'whiteAlpha.800'}
				rounded='md'
				_hover={{
					textDecoration: 'none',
					bg: '#e0d4f4',
					color: '#5f4cd8',
					borderColor: '#5f4cd8',
				}}
			>
				<Avatar
					justifyContent={'center'}
					size={'sm'}
					src={MetaMaskLogo}
					bg={'none'}
					pe={2}
				/>

				{btnText}
			</Button>
		</Flex>
	);
};

export default ButtonWallet;
