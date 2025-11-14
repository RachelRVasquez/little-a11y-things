import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DialogPage from "./pages/DialogPage";
import NotFound from "./pages/NotFound";
import './styles/main.scss'

function App() {
  return (
      <BrowserRouter>
          <Header />
          <main className="page-content">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/dialog" element={<DialogPage />} />
                  <Route path="*" element={<NotFound />} />
              </Routes>
          </main>
          <Footer />
      </BrowserRouter>
  )
}

export default App;
