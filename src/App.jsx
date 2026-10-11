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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile/view" element={<ProfileView />} />
          <Route path="/profile/edit" element={<ProfileEdit />} />
          <Route path="/user/feed" element={<Feed />} />
          <Route path="/user/connections" element={<Connections />} />
          <Route path="/user/requests/received" element={<Requests />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
