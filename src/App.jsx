import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/common/Menu';
import Home from './pages/Home';
import Module1 from './modules/Module1';
import Module2 from './modules/Module2';
import Module3 from './modules/Module3';
import Module4 from './modules/Module4';
import Module5 from './modules/Module5';
import Module6 from './modules/Module6';
import Module7 from './modules/Module7';
import './styles/global.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter basename="/presentazione-vlan">
      <div className="app-container">
        <Sidebar isOpen={menuOpen} onToggle={() => setMenuOpen(!menuOpen)} />

        <main className="main-content" onClick={() => menuOpen && setMenuOpen(false)}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/module/1/*" element={<Module1 />} />
            <Route path="/module/2/*" element={<Module2 />} />
            <Route path="/module/3/*" element={<Module3 />} />
            <Route path="/module/4/*" element={<Module4 />} />
            <Route path="/module/5/*" element={<Module5 />} />
            <Route path="/module/6/*" element={<Module6 />} />
            <Route path="/module/7/*" element={<Module7 />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
