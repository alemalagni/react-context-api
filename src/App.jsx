import { useState } from 'react';
import PostsPage from './PostsPage';
import './App.css'

function App() {
  const [posts] = useState([
    { id: 1, title: 'Primo Post', content: 'Primo post.' },
    { id: 2, title: 'Secondo Post', content: 'Secondo post.' },
    { id: 3, title: 'Terzo Post', content: 'Terzo post.' }
  ]);

  return (
    <div>
      <PostsPage posts={posts} />
    </div>
  )
}

export default App;