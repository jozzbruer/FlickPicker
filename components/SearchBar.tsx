import { AppContext } from '@/context/AppContextProvider';
import { SearchIcon } from '@chakra-ui/icons';
import {
	Box,
	Flex,
	FormControl,
	Input,
	InputGroup,
	InputLeftElement,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';

const SearchBar: React.FC = () => {
	const { fetchData, movies } = useContext(AppContext);
	const [searchValue, setSearchValue] = useState('');

	const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		fetchData(searchValue);
	};

	console.log(movies);
	return (
		<Flex
			alignItems='center'
			justifyContent='center'
			width='100vw'
			height='30vh'>
			<Box width='70%'>
				<form onSubmit={searchHandler}>
					<InputGroup>
						<InputLeftElement
							pointerEvents='none'
							children={<SearchIcon color='gray.300' h='6' w='6' />}
						/>
						<Input
							size='lg'
							placeholder='Search...'
							value={searchValue}
							onChange={(e) => setSearchValue(e.target.value)}
						/>
					</InputGroup>
				</form>
			</Box>
		</Flex>
	);
};

export default SearchBar;
