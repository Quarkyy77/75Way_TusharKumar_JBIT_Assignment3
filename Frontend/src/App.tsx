import { Routes, Route } from "react-router-dom";
import Desktop from "./pages/Desktop";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { store } from "./redux/store";
import { Provider } from "react";
function App() {
  return (
    <Routes>
      <Route index element={<Desktop />} />
      <Route path={"/login"} element={<LoginPage />} />
      <Route path={"/register"} element={<RegisterPage />} />
    </Routes>
  );
}
export default App;
