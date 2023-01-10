import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

import Broken from './routes/broken';
import Rendering from './routes/rendering';

const routes = [
  {
    to: '/',
    children: 'Home'
  },
  {
    to: '/broken',
    children: 'Broken'
  },
  {
    to: '/rendering',
    children: 'Rendering'
  }
];

function Home() {
  return (
    <div>Click the links above to get started!</div>
  );
}

export default function App() {
  return (
    <div className="w-3/4 mx-auto mt-4">
      <Router>
        <nav className="flex gap-3 mb-4">
          {routes.map(link => (
            <Link className="bg-blue-600 hover:bg-blue-400 text-white p-4 rounded-md" key={link.to} {...link} />
          ))}
        </nav>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="broken" element={<Broken />} />
          <Route path="rendering" element={<Rendering />} />
        </Routes>
      </Router>
    </div>
  );
}