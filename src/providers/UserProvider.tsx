import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

type User = {
	id: string;
	name: string;
};

const defaultUser = null;
export const UserContext = createContext<User | null>(defaultUser);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<any>(null);

	useEffect(() => {
		auth.onAuthStateChanged((userAuth) => setUser(userAuth));
	}, []);

	return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
export default UserProvider;
