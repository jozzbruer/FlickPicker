import axios, { AxiosResponse } from 'axios';
import React, { ReactNode, createContext, useState } from 'react';

interface IMovieContext {
	movies: any[];
	loading: boolean;
	error: string | null;
	fetchData: (search: string) => void;
}

const MovieContext: IMovieContext = {
	movies: [],
	loading: false,
	error: null,
	fetchData: () => {},
};
export const AppContext = createContext(MovieContext);

type Props = {
	children: ReactNode;
};
const AppContextProvider: React.FC<Props> = ({ children }) => {
	const [movies, setMovies] = useState<any[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const options = {
		headers: {
			'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
			'X-RapidAPI-Host': process.env.NEXT_PUBLIC_HOST,
		},
	};

	const fetchData = async (searchText: string) => {
		setLoading(true);
		try {
			const response: AxiosResponse = await axios.get(
				`https://movie-database-alternative.p.rapidapi.com/?s=${searchText}`,
				options
			);
			const responseData = await response.data.Search;
			setMovies(responseData);
			setLoading(false);
		} catch (error: any) {
			setError(error.message);
			setLoading(false);
		}
	};
	return (
		<AppContext.Provider value={{ movies, loading, error, fetchData }}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;
