import axios, { AxiosResponse } from 'axios';
import React, { ReactNode, createContext, useEffect, useState } from 'react';

interface IMovieContext {
	movies: any[];
	bookmarkedMovies: any[];
	loading: boolean;
	error: string | null;
	fetchData: (search: string) => void;
	handleBookmarkClick: (movie: any[], id: string) => void;
}

const MovieContext: IMovieContext = {
	movies: [],
	bookmarkedMovies: [],
	loading: false,
	error: null,
	fetchData: () => {},
	handleBookmarkClick: () => {},
};
export const AppContext = createContext(MovieContext);

type Props = {
	children: ReactNode;
};
const AppContextProvider: React.FC<Props> = ({ children }) => {
	const [movies, setMovies] = useState<any[]>([]);
	const [bookmarkedMovies, setBookmarkedMovies] = useState<any[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const options = {
		headers: {
			'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
			'X-RapidAPI-Host': process.env.NEXT_PUBLIC_HOST,
		},
	};

	const addNewField = (data: any[]) => {
		const response = data.map((item: any) => {
			return { ...item, isWatched: false, isFavorite: false };
		});

		return response;
	};

	useEffect(() => {
		const localMovies = localStorage.getItem('bookmarkedMovies');
		if (localMovies) {
			setBookmarkedMovies(JSON.parse(localMovies));
		} else {
			localStorage.setItem('bookmarkedMovies', JSON.stringify([]));
		}
	}, []);

	const fetchData = async (searchText: string) => {
		setLoading(true);
		try {
			const response: AxiosResponse = await axios.get(
				`https://movie-database-alternative.p.rapidapi.com/?s=${searchText}`,
				options
			);
			const responseData = await response.data.Search;
			const finalResponse = addNewField(responseData);
			setMovies(finalResponse);
			setLoading(false);
		} catch (error: any) {
			setError(error.message);
			setLoading(false);
		}
	};
	const checkIfAlreadyBookmarked = (array: any[], movieId: string) => {
		if (movieId === '') {
			return;
		}
		const idSet = new Set(array.map((arr) => arr.imdbID));
		return idSet.has(movieId);
	};

	const handleBookmarkClick = (movies: any[], id: string) => {
		if (movies.length !== 0) {
			const newMovie = movies.map((movie) => {
				if (movie.imdbID === id) {
					if (movie.isFavorite === false) return { ...movie, isFavorite: true };
					else return { ...movie, isFavorite: false };
				}
				return movie;
			});

			const filteredMovie = newMovie.filter(
				(movie) => movie.isFavorite === true
			);

			let newBookmarkedMovie: any[] = [];
			let finalBookmarked: any[] = [];
			// Dont bookmark movie twice
			if (filteredMovie.length > 0) {
				if (
					checkIfAlreadyBookmarked(bookmarkedMovies, filteredMovie[0].imdbID)
				) {
					return;
				}
				newBookmarkedMovie = [...bookmarkedMovies, filteredMovie[0]];
				finalBookmarked = newBookmarkedMovie.filter(
					(movie) => movie.isFavorite === true
				); // So i can remove unbookmarked movies in the list
			} else {
				finalBookmarked = movies.filter((movie) => movie.isFavorite === true);
			}

			setBookmarkedMovies(finalBookmarked);
			localStorage.setItem(
				'bookmarkedMovies',
				JSON.stringify(bookmarkedMovies)
			);
		}
	};
	return (
		<AppContext.Provider
			value={{
				movies,
				loading,
				error,
				fetchData,
				handleBookmarkClick,
				bookmarkedMovies,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;
