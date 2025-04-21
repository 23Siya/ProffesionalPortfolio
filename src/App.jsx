import { useState } from 'react';
import './App.css';
import LoadingScreen from './components/loadingScreen';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {/* Logo at the top left */}
      <div className="fixed top-4 left-4 text-2xl font-bold text-gray-100 z-50">
        Matsysol<span className="text-blue-500">.dev</span>
      </div>

      {/* Loading Screen */}
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      {/* Main Content */}
      {isLoaded && (
        <div className="min-h-screen bg-black text-gray-100">
          <NavBar />
         
          <div>Your main app content goes here!</div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default App;
