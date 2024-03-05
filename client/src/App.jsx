import { useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import PublicRouter from "./routes/PublicRouter";
import Home from "./pages/user/Home";
import Posts from "./pages/user/Posts";
import Likes from "./pages/user/Likes";
import Contact from "./pages/user/Contact";
import Notification from "./pages/user/Notification";
import Register from "./pages/user/Register";
import Buys from "./pages/user/Buys";
import Rent from "./pages/user/Rent";
import Login from "./pages/user/Login";
import PrivateRouter from "./routes/PrivateRouter";
import Dashboard from "./pages/admin/Dashboard";
import PostsList from "./pages/admin/PostsList";
import CreatePost from "./pages/admin/CreatePost";
import CreateBuy from "./pages/admin/CreateBuy";
import PostDetail from "./pages/user/PostDetail";
import EditPost from "./pages/admin/EditPost";
import PreviewPost from "./pages/admin/PreviewPost";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route to="/" element={<PublicRouter />}>
          <Route index element={<Home />} />
          <Route path="rent" element={<Rent />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<PostDetail />} />
          <Route path="buys" element={<Buys />} />
          <Route path="likes" element={<Likes />} />
          <Route path="contact" element={<Contact />} />
          <Route path="notification" element={<Notification />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<PrivateRouter />}>
          <Route index element={<Dashboard />} />
          <Route path="posts-list" element={<PostsList status={9} />} />
          <Route path="posts-created" element={<PostsList status={0} />} />
          <Route path="posted-list" element={<PostsList status={1} />} />
          <Route path="posts-hidden" element={<PostsList status={2} />} />
          <Route path="create-post" element={<CreatePost />} />
          <Route path="edit-post/:id" element={<EditPost />} />
          <Route path="preview-post/:id" element={<PreviewPost />} />
          <Route path="create-buy" element={<CreateBuy />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
