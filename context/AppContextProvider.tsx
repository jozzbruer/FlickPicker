import { ReactNode, createContext } from 'react';
export const AppContext = createContext('');

type Props = {
	children: ReactNode;
};
const AppContextProvider = ({ children }: Props) => {
	return <AppContext.Provider value=''>{children}</AppContext.Provider>;
};

export default AppContextProvider;
