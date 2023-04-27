import DisplayTabs from '@/components/DisplayTabs';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';

const Home: React.FC = () => {
	return (
		<>
			<Header />
			<SearchBar />
			<DisplayTabs />
		</>
	);
};

export default Home;
