import "./App.css";
import { Route, Routes } from "react-router-dom";
import CalendarPage from "./pages/CalendarPage/CalendarPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<CalendarPage />} />
    </Routes>
  );
};

export default App;
