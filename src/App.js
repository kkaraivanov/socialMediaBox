import { Routes, Route } from "react-router-dom";
import { Home, MusicBox, Error404, Login, Register } from './pages'
import Dashboard from "./pages/Dashboard";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import AppRouter from "./routes/Router";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AppRouter />}>
          <Route path="/" element={<PublicRoute />}>
            <Route index element={<Home />} />
            <Route path="login" exact element={<Login />} />
            <Route path="register" exact element={<Register />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="music" element={<MusicBox />} />
            <Route path="*" element={<Error404 />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;