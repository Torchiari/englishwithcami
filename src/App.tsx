import { Routes, Route } from "react-router-dom";
import Navbar from "./components/commons/navbar";
import Footer from "./components/commons/footer";
import AboutPage from "./pages/about/about";
import CoursesPage from "./pages/courses/courses";
import FaqAccordion from "./components/accordion/faqAccordion";
import { faqData } from "./data/faqData";
import Calendar from "./pages/calendar/calendario";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/faqs" element={<FaqAccordion data={faqData} />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
