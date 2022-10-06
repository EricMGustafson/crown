import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";
import Authentication from "./pages/authentication/authentication.page";
import Home from "./pages/home/home.page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
