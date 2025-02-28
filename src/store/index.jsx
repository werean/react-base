import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./modules/rootReducer";

// Estado inicial da aplicação
// Define que o botão começa como não clicado (false)

// Configura e cria a store do Redux
// O reducer é passado dentro de um objeto para criar um "slice" do estado
const store = configureStore({
  reducer: rootReducer,
});

export default store;
