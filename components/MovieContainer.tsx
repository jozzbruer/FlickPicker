import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
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
				<Flex>
					{movies?.map((movie) => (
						<Box key={movie.imdbID}>
							<Flex>
								<Image
									src={movie.Poster}
									alt={movie.Title}
									width={300}
									height={300}
									quality={100}
								/>
								{movie.isFavorite ? (
									<BsFillBookmarkFill />
								) : (
									<FaRegBookmark size='1.2rem' />
								)}
							</Flex>
							<Text>
								{movie.Title} - {movie.Year}
							</Text>
						</Box>
					))}
				</Flex>
			)}
		</>
	);
};

export default MovieContainer;
