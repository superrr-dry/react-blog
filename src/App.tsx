import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogForm from './BlogForm';
import NavigateButton from './Organisms/NavigateButton';
import Header from './Organisms/Header';
import Footer from './Organisms/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <NavigateButton />
      <Routes>
        <Route path="/blog" element={<BlogForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;