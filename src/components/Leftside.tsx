import '../App.css';

function LeftSide() {
  return (
    <div className='col-2 row column pr-25 jc-center'>
      <h1 className='title'>Calcule o seu IMC</h1>
      <p className='subtitle mt-20'>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
      <input className='input-text mt-30' type="text" placeholder='Digite a sua altura Ex: 1.5 (em métros)' />
      <input className='input-text mt-10' type="text" placeholder='Digite o seu peso Ex: 75kg (em kg)' />
      <button className='mt-50 button-calculate'>Calcular</button>
    </div>
  );
}

export default LeftSide;