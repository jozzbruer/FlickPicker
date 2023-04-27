import {
	Box,
	Button,
	ButtonGroup,
	Card,
	CardBody,
	CardFooter,
	Divider,
	Flex,
	Heading,
	Image,
	SimpleGrid,
	Stack,
	Text,
} from '@chakra-ui/react';
import { FaRegBookmark } from 'react-icons/fa';
import { BsFillBookmarkFill } from 'react-icons/bs';

type Props = {
	loading?: boolean;
	error?: string;
	movies?: any[];
};
const MovieContainer: React.FC<Props> = ({ loading, error, movies }) => {
	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	console.log(movies);
	return (
		<>
			{movies?.length === 0 ? (
				<Flex justifyContent='center'>
					<Text fontSize='3rem' color='gray.400'>
						No movies here
					</Text>
				</Flex>
			) : (
				<SimpleGrid columns={[1, 2, 3, 4, 5]} gap={2}>
					{movies?.map((movie) => (
						<Card maxW='sm' key={movie.imdbID} mb='2rem'>
							<CardBody textAlign='center'>
								<Image
									margin='0 auto'
									src={movie.Poster}
									alt={movie.Title}
									borderRadius='lg'
								/>
								<Stack mt='6' spacing='3'>
									<Heading size='md'>
										{movie.Title} - {movie.Year}
									</Heading>
								</Stack>
							</CardBody>
							<Divider />
							<CardFooter>
								<ButtonGroup spacing='2'>
									<Button size='sm' variant='solid' colorScheme='blue'>
										{movie.isWatched ? 'Watched' : 'Not Watched'}
									</Button>
									<Button size='sm' variant='ghost' colorScheme='blue'>
										{movie.isFavorite ? (
											<BsFillBookmarkFill />
										) : (
											<FaRegBookmark />
										)}
									</Button>
								</ButtonGroup>
							</CardFooter>
						</Card>
					))}
				</SimpleGrid>
			)}
		</>
	);
};

export default MovieContainer;
