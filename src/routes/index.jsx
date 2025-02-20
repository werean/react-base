import { Routes } from "react-router-dom";
import Page404 from "../components/Page404";
import Login from "../pages/Login/Index";
import MyRoute from "./MyRoute";

export default function Routers() {
  return (
    <Routes>
      <MyRoute path="/" element={<Login />} />
      <MyRoute path="*" element={<Page404 />} />
    </Routes>
  );
}
