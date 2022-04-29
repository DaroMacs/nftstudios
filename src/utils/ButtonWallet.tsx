import { Flex, Avatar, Button } from '@chakra-ui/react';
import MetaMaskLogo from '../assets/images/MetaMask_Fox.png';
import { motion } from 'framer-motion';

interface buttonProps {
	btnText: string;
	connect: () => Promise<void>;
}

const ButtonWallet = ({ btnText, connect }: buttonProps) => {
	return (
		<Flex alignItems={'center'} me={10}>
			<motion.div whileHover={{ scale: 1.03 }}>
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
					onClick={connect}
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
			</motion.div>
		</Flex>
	);
};

export default ButtonWallet;
