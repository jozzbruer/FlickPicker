import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { TbMovie } from 'react-icons/tb';
import { FaRegBookmark } from 'react-icons/fa';
import MovieContainer from './MovieContainer';
import { AppContext } from '@/context/AppContextProvider';
import { useContext, useEffect } from 'react';

const DisplayTabs: React.FC = () => {
	const { loading, error, movies, bookmarkedMovies } = useContext(AppContext);

	return (
		<>
			<Tabs>
				<TabList>
					<Tab width='50%'>
						<TbMovie size='1.6rem' /> Movies
					</Tab>
					<Tab width='50%'>
						<FaRegBookmark size='1.6rem' />
						Bookmarks
					</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<MovieContainer loading={loading} error={error!} movies={movies!} />
					</TabPanel>
					<TabPanel>
						<MovieContainer movies={bookmarkedMovies} />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</>
	);
};

export default DisplayTabs;
