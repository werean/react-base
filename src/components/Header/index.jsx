import { Nav } from "./styled";
import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // Hook do Redux para ler dados da store

export default function Header() {
  // useSelector permite acessar o estado do Redux
  // state.reducer.clickedButton:
  // - state: estado global
  // - reducer: nome do slice definido na store
  // - clickedButton: propriedade definida no initialState
  const clickedButton = useSelector((state) => state.example.clickedButton);

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/merda">
        <FaUserAlt />
      </Link>
      <Link to="/teste">
        <FaSignInAlt size={24} />
      </Link>
      {/* Renderização condicional baseada no estado do clickedButton */}
      {/* Se true, mostra "Clicado", se false, mostra "Não clicado" */}
      {clickedButton ? "Clicado" : "Não clicado"}
    </Nav>
  );
}
