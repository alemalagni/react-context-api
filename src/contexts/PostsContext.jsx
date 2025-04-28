import { createContext, useState } from 'react';
export const PostsContext = createContext();

export function PostsProvider({ children }) {
    const [posts] = useState([
        { id: 1, title: 'Primo Post', content: 'Questo è il primo post.' },
        { id: 2, title: 'Secondo Post', content: 'Questo è il secondo post.' },
        { id: 3, title: 'Terzo Post', content: 'Questo è il terzo post.' }
    ]);

    return (
        <PostsContext.Provider value={{ posts }}>
            {children}
        </PostsContext.Provider>
    );
}