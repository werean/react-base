import { Routes, Route } from "react-router-dom";

//import { toast } from "react-toastify";
import Page404 from "../pages/Page404";
import Login from "../pages/Login/Index";
import MyRoute from "./MyRoute";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<MyRoute element={<Login />} />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
