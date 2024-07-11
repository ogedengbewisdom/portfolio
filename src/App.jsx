import "./App.css";
import "./index.css";
import { Box } from "@chakra-ui/react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import RootPage from "./pages/RootPage";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RootPage />}>
            <Route index={true} element={<Home />} />
            <Route path="house" element={<Box>Home</Box>} />
            <Route path="home" element={<Box>Right man</Box>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
