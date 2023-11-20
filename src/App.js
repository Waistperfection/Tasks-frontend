import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./hoc/AuthProvider";
import Layout from "./pages/Layoutpage";
import Homepage from "./pages/Homepage";
import ProtectedRoutes from "./hoc/ProtectedRoutes";
import NotFoundpage from "./pages/NotFoundpage";
import Loginpage from "./pages/Loginpage";
import Registrationpage from "./pages/Registrationpage";
import Tasklistpage from "./pages/Tasklistpage";
import Taskdetailpage from "./pages/Taskdetailpage";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="login/" element={<Loginpage />} />
          <Route path="registration/" element={<Registrationpage />} />
          {/* auth required routes */}
          <Route element={<ProtectedRoutes />}>
            <Route path="task/" element={<Tasklistpage />} />
            <Route path="task/:id/" element={<Taskdetailpage />} />
          </Route>
          {/* 404 hand */}
          <Route path="*" element={<NotFoundpage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
