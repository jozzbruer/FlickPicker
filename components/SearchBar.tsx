import { SearchIcon } from '@chakra-ui/icons';
import {
	Flex,
	FormControl,
	Input,
	InputGroup,
	InputLeftElement,
} from '@chakra-ui/react';

const SearchBar: React.FC = () => {
	return (
		<Flex
			alignItems='center'
			justifyContent='center'
			width='100vw'
			height='30vh'>
			<FormControl width='70%'>
				<InputGroup>
					<InputLeftElement
						pointerEvents='none'
						children={<SearchIcon color='gray.300' h='6' w='6' />}
					/>
					<Input size='lg' placeholder='Search...' />
				</InputGroup>
			</FormControl>
		</Flex>
	);
};

export default SearchBar;
