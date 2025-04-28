import PostsPage from './components/PostsPage';
import { PostsProvider } from './contexts/PostsContext';
import './App.css'

function App() {
  return (
    <PostsProvider>
      <div>
        <PostsPage />
      </div>
    </PostsProvider>
  )
}

export default App;