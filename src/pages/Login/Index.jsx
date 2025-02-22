import { useEffect } from "react";
import { Title, Teste } from "../../styles/styled";
import { Container } from "../../styles/GlobalStyles";
import axios from "../../services/axios";

export default function Login() {
  useEffect(() => {
    async function getDate() {
      const response = await axios.get("/users");
      const { data } = response;
      console.log(data);
    }
    getDate();
  }, []);
  return (
    <Container>
      <Title>
        <h1>Login</h1>
        <small>Hello</small>
      </Title>
      <Teste>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident pariatur sunt vero?
          Beatae, rem reiciendis fugit
        </p>
      </Teste>
      <button>teste</button>
    </Container>
  );
}
