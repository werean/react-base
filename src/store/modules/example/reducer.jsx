const initialState = {
  clickedButton: false,
};

// Reducer: função que gerencia as mudanças no estado
// Recebe o estado atual (ou estado inicial se for primeira execução) e uma action
export default function reducer(state = initialState, action) {
  switch (action.type) {
    // Quando receber uma action do tipo "clicked_button"
    case "clicked_button": {
      // Cria uma cópia do estado atual para não modificar o estado diretamente
      const newState = { ...state };
      // Inverte o valor atual de clickedButton (true vira false, false vira true)
      newState.clickedButton = !newState.clickedButton;
      return newState;
    }

    // Caso receba uma action que não conhece, retorna o estado sem modificação
    default: {
      return state;
    }
  }
}
