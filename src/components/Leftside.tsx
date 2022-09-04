import React, { useState } from 'react';
import '../App.css';

function LeftSide() {

  let [weigh, setW] = useState<number>();
  let [height, setH] = useState<number>();
  let [buttonHover, isOver] = useState(false);

  const handleInputValidator = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = (event.target.value != "") ? parseFloat(event.target.value) : 0;

    if (event.target.classList.contains("height")) {
      if (inputValue == 0) {
        setW(undefined);
      } else {
        (inputValue < 0) ? setW(0) : setW(inputValue);
      }
    } else {
      if (inputValue == 0) {
        setH(undefined);
      } else {
        (inputValue < 0) ? setH(0) : setH(inputValue);
      }
    }

  }

  const calculateImc = () => {

    let h: number = (height == undefined) ? 0 : height;
    let w: number = (weigh == undefined) ? 0 : weigh;

    let imc: number = w / (h ** 2);
    console.log(imc);
  }

  const handleMouseOver = () => {

    let h: number = (height == undefined) ? 0 : height;
    let w: number = (weigh == undefined) ? 0 : weigh;

    if(h <= 0 || w <=0){
      isOver(true);
    }

  }

  const handleMouseOut = () => {
    isOver(false);
  }

  return (
    <div className='col-2 row column pr-25 jc-center'>
      <h1 className='title'>Calcule o seu IMC</h1>
      <p className='subtitle mt-20'>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
      <input className='input-number weigh mt-30' type="number" value={height} onChange={handleInputValidator} placeholder='Digite a sua altura Ex: 1.5 (em métros)' />
      <input className='input-number height mt-10' type="number" value={weigh} onChange={handleInputValidator} placeholder='Digite o seu peso Ex: 75kg (em kg)' />
      <button className={'mt-50 button-calculate smooth-transition hover-scale' + ((buttonHover == true) ? " block-click" : "")} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={calculateImc}>Calcular</button>
    </div>
  );
}

export default LeftSide;