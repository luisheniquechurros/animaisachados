import  { useState } from 'react';

function Cadastrar({ addAnimal }) {
  const [url, setUrl] = useState('');
  const [raça, setRaça] = useState('');
  const [situacao, setSituacao] = useState('');
  const [regiao, setRegiao] = useState('');

  const cadastrar = () => {
    if (url === '' || raça === '' || situacao === '' || regiao === '') {
      return;
    }

    addAnimal(url, raça, regiao, situacao);

    setUrl('');
    setRaça('');
    setSituacao('');
    setRegiao('');
  };

  return (
    <>
      <h2>Cadastrar</h2>
      <div className="cadastrar">
        <form>
          <input className='uereele' type="text" placeholder="Escreva o endereço da imagem" onChange={(e) => setUrl(e.target.value)} value={url} />
          <input className='rasa' type="text" placeholder="Escreva a raça do animal" onChange={(e) => setRaça(e.target.value)} value={raça} />
          <input className='regiao' type="text" placeholder="Escreva a região que o animal foi perdido/achado" onChange={(e) => setRegiao(e.target.value)} value={regiao} />

          <select onChange={(e) => setSituacao(e.target.value)} value={situacao} className='aleatorio'>
            <option value="perdido">Perdido</option>
            <option value="achado">Achado</option>
          </select>
        </form>
        <button onClick={cadastrar}>Adicionar</button>
      </div>
    </>
  );
}

export default Cadastrar;
