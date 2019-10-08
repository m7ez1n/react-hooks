import React, { useState } from 'react';

function App() {
  /**
   * O useState() recebe retorna um array que na primeira posição "tech"
   * ele retorna o própio estado, e na segunda posição ele retorna uma função
   * para alterar o estado
   */
  const [techs, setTech] = useState(['ReactJS', 'React Native']);
  /**
   * E ele recebe como parametro o valor inicial do elemento que quer
   * adicionar um estado.
   */
  const [newTech, setNewTech] = useState(['']);

  // Fazendo uma função para adicionar novos valores
  function handleAdd() {
    setTech([...techs, newTech]);
    setNewTech('');
  }

  return (
    // Criando um fragment para ter mais de um componente dentro de um componente
    <>
      <ul>
        {/* Fazendo um map para retornar cada tech em uma nova li */}
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      {/** Um input com a função que pega o valor digitado */}
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />

      {/** O botão que chama a ação de adicionar uma nova tech */}
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
