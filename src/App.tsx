import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Buttons from "./pages/ButtonsPage";
import DialogPage from "./pages/DialogPage";
import UpcomingPage from "./pages/UpcomingPage";
import NotFound from "./pages/NotFound";
import ThemeToggle from "./components/ThemeToggle";
import './styles/main.scss'

function App() {
  return (
      <BrowserRouter>
          <Header />
          <main className="page-content">
              <ThemeToggle />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/buttons" element={<Buttons />} />
                  <Route path="/dialog" element={<DialogPage />} />
                  <Route path="/upcoming" element={<UpcomingPage />} />
                  <Route path="*" element={<NotFound />} />
              </Routes>
          </main>
          <Footer />
      </BrowserRouter>
  )
}

export default App;
