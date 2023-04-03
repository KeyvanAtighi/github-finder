import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GithubProvider } from "./context/github/GithubContext";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <GithubProvider>
      <BrowserRouter>
        <div className="h-screen flex flex-col justify-between">
          <Navbar />
          <main className="container mx-auto my-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </GithubProvider>
  );
}

export default App;
