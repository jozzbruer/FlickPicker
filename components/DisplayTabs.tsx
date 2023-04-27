import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { TbMovie } from 'react-icons/tb';
import { FaRegBookmark } from 'react-icons/fa';

const DisplayTabs: React.FC = () => {
	return (
		<>
			<Tabs>
				<TabList>
					<Tab width='50%'>
						<TbMovie size='1.6rem' />
						Movies
					</Tab>
					<Tab width='50%'>
						<FaRegBookmark size='1.6rem' />
						Bookmarks
					</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>1</TabPanel>
					<TabPanel>2</TabPanel>
				</TabPanels>
			</Tabs>
		</>
	);
};

export default DisplayTabs;
