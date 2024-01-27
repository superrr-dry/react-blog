import { BrowserRouter as Router } from 'react-router-dom';
import { BlogProvider } from './contexts/BlogContext';
import Header from './components/Header';
import Footer from './components/Footer';
import { RouterConfig } from './routes/RouterConfig';

const App = () => {
  return (
    <Router>
      <BlogProvider>
        <Header />
        <RouterConfig />
        <Footer />
      </BlogProvider>
    </Router>
  );
}

export default App;