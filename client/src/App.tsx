import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateEventPage from './pages/CreateEventPage';
import EventDetailPage from './pages/EventDetailPage';
import AddOutfitPage from './pages/AddOutfitPage';
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreateEventPage />} />
          <Route path="/event/:id" element={<EventDetailPage />} />
          <Route path="/event/:id/add-outfit" element={<AddOutfitPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
