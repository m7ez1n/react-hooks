import React, { useState, useEffect } from 'react';

function App() {
  /**
   * O useState() recebe retorna um array que na primeira posição "tech"
   * ele retorna o própio estado, e na segunda posição ele retorna uma função
   * para alterar o estado
   */
  const [techs, setTech] = useState([]);
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

  /**
   * Aqui o useEffect() está sendo usado com o intuito de executar somente quando
   * o componente é montado, porque ele não está monitorando nenhuma variável como
   * segundo parâmetro.
   */
  useEffect(() => {
    const storageTechs = localStorage.getItem('techs');

    if (storageTechs) {
      setTech(JSON.parse(storageTechs));
    }
  }, []);

  /**
   * O useEffect() é um hook responsável por substituir os componentes do ciclo
   * de vida como o componentDidUpdate(), componentDidMount(). Ele vai receber
   * dois parâmetros, o primeiro é a função que será executada, o segundo parâmetro
   * é quando a função vai ser executada.
   * O segundo parâmetro é um array de dependência onde ele escuta as mudanças que
   * ocorrem em certas variáveis.
   */
  useEffect(() => {
    // O array de techs sempre que for alterado vai ser carregado no localStorage
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

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
