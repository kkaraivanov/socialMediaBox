import { Routes, Route } from "react-router-dom";
import { Home, Error404, Error500, Login, Register } from './pages'
import Dashboard from "./pages/Dashboard";
import useInitialize from "./hooks/useInitialize";

function App() {
  const { state, sesion } = useInitialize();

  return (
    <Routes>
      {
        state ? // add router guard
          (!sesion ?
            (
              <>
                <Route path="/" exact element={<Home />} />
                <Route path="/login" exact element={<Login />} />
                <Route path="/register" exact element={<Register />} />
              </>
            ) :
            (
              <>
                <Route path="/" exact element={<Dashboard />} />
              </>
            )
          ) :
          (<Route path="/" element={<Error500 />} />)
      }
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;