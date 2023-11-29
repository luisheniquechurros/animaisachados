import React from 'react';

function Listagem({ listaAnimais, removerAnimal, alterarStatus }) {
    console.log(listaAnimais)
  return (
    <>
      <h2>Listagem</h2>
      <div className="listagem">
        {listaAnimais.map((animal) => (
          <div key={animal.id} className="animal">
            <img src={animal.url} alt={animal.raca} />
            <p>Raça: {animal.raca}</p>
            <p>Local: {animal.local}</p>
            <p>Situação: {animal.situacao}</p>
            <p>Status: {animal.isConcluido ? "achado" : "perdido"}</p>

            <button onClick={() => alterarStatus(animal.id)}>Alterar status</button>
            <button onClick={() => removerAnimal(animal.id)}>Remover</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Listagem;
