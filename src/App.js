import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
// context
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/Alert/AlertContext";
import GithubContext from "./context/github/GithubContext";

// components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Alert from "./components/layout/Alert";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import NotFound from "./pages/NotFound";

function App() {
  // hooks
  // const { user } = useContext(GithubContext);
  // console.log(user);
  return (
    <AlertProvider>
      <GithubProvider>
        <BrowserRouter>
          <div className="h-screen flex flex-col justify-between">
            <Navbar />

            <main className="container mx-auto my-8">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Alert />
                      <Home />
                    </>
                  }
                />
                <Route path="/about" element={<About />} />

                <Route path="/user/:login" element={<User />} />

                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </BrowserRouter>
      </GithubProvider>
    </AlertProvider>
  );
}

export default App;
