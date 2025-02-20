import { Routes, Route } from "react-router-dom";
import Page404 from "../components/Page404";
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
