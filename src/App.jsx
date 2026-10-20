import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Feed from "./pages/Feed";
import ProfileView from "./pages/ProfileView";
import ProfileEdit from "./pages/ProfileEdit";
import Connections from "./pages/Connections";
import Requests from "./pages/Requests";
import ProtectedRoute from "./ui/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import PasswordEdit from "./pages/PasswordEdit";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* here AppLayout is the layout route */}
          <Route element={<AppLayout />}>
          {/* Public Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Private Pages */}
            <Route element={<ProtectedRoute />}>
              <Route path="/profile/view" element={<ProfileView />} />
              <Route path="/profile/edit" element={<ProfileEdit />} />
              <Route path="/profile/edit/password" element={<PasswordEdit />} />
              <Route path="/user/feed" element={<Feed />} />
              <Route path="/user/connections" element={<Connections />} />
              <Route path="/user/requests/received" element={<Requests />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
