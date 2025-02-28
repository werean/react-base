// Importa o hook useDispatch do Redux que permite enviar ações para a store
import { useDispatch } from "react-redux";
// Importa componentes estilizados personalizados
import { Title, Teste } from "../../styles/styled";
import { Container } from "../../styles/GlobalStyles";
import * as exempleActions from "../../store/modules/example/actions";

export default function Login() {
  // Inicializa o dispatch que será usado para enviar ações ao Redux
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    // Envia uma ação para o Redux do tipo "clicked_button"
    // Isso fará com que o reducer atualize o estado clickedButton
    dispatch(exempleActions.clickedButton());

    console.log("cliquei");
  }

  return (
    // Container é um componente estilizado que mantém o layout consistente
    <Container>
      {/* Componente Title para estilização consistente dos títulos */}
      <Title>
        <h1>Login</h1>
        <small>Hello</small>
      </Title>

      {/* Componente Teste para estilização do parágrafo */}
      <Teste>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident pariatur sunt vero?
          Beatae, rem reiciendis fugit
        </p>
      </Teste>

      {/* Botão que dispara a ação do Redux quando clicado */}
      <button type="button" onClick={handleClick}>
        teste
      </button>
    </Container>
  );
}
