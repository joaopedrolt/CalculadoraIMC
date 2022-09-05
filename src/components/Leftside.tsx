import React, { useState } from 'react';
import '../App.css';

type Imc = {
  setImc: React.Dispatch<React.SetStateAction<number>>;
  setShowResult: React.Dispatch<React.SetStateAction<boolean>>;
  showResult: boolean;
}

function LeftSide({ setImc, setShowResult, showResult }: Imc) {

  let [weigh, setW] = useState<number>();
  let [height, setH] = useState<number>();
  let [buttonText, setBtext] = useState<string>("Calcular");
  let [blockedClass, setBlocked] = useState(false);
  let [m, setM] = useState<string>("");
  let [kg, setKg] = useState<string>("");

  const handleInputValidator = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = (event.target.value != "") ? parseFloat(event.target.value) : 0;

    if (event.target.classList.contains("height")) {
      setM("M");
      if (inputValue == 0) {
        setH(undefined);
        setM("");
      } else {
        (inputValue < 0) ? setH(0) : setH(inputValue);
      }
    } else {
      setKg("KG");
      if (inputValue == 0) {
        setKg("");
        setW(undefined);
      } else {
        (inputValue < 0) ? setW(0) : setW(inputValue);
      }
    }

    let h: number = (height == undefined) ? 0 : height;
    let w: number = (weigh == undefined) ? 0 : weigh;

    if (h > 0 || w > 0) {
      setBlocked(false);
      setBtext("Calcular");
    } 

  }

  const calculateImc = () => {

    let h: number = (height == undefined) ? 0 : height;
    let w: number = (weigh == undefined) ? 0 : weigh;

    let imc: number = w / (h ** 2);
    console.log(imc);

    if ((h > 0 && w > 0) && showResult == false) {
      setImc(imc);
      setShowResult(true);
      console.log(imc);
      setBtext("Efetuar Novo Cálculo");
    }

    if (showResult == true) {
      setShowResult(false);
      setBtext("Calcular");
      setBlocked(true);
      setBtext("Insira os Dados Corretamente");
      setH(0);
      setW(0);
    }
  }

  const handleMouseOver = () => {

    let h: number = (height == undefined) ? 0 : height;
    let w: number = (weigh == undefined) ? 0 : weigh;

    if (showResult == false && (h <= 0 || w <= 0)) {
      setBlocked(true);
      setBtext("Insira os Dados Corretamente");
    }

    if (showResult == true) {
      setBlocked(false);
    }

  }

  const handleMouseOut = () => {

    if (showResult == true) {
      setBlocked(true);
    }

  }

  return (
    <div className='col-2 row column pr-25 jc-center'>
      <h1 className='title'>Calcule o seu IMC</h1>
      <p className='subtitle mt-20'>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
      <div className='row w-95'>
        <input className='input-number height mt-30' type="number" value={height} onChange={handleInputValidator} placeholder='Digite a sua altura Ex: 1.5 (em métros)' />
        <span className='d-flex al-end measures'>{m}</span>
      </div>
      <div className='row w-95'>
        <input className='input-number weigh mt-10' type="number"  value={weigh} onChange={handleInputValidator} placeholder='Digite o seu peso Ex: 75kg (em kg)' />
        <span className='d-flex al-end measures'>{kg}</span>
      </div>
      <button className={'mt-50 button-calculate smooth-transition hover-scale' + ((blockedClass == true) ? " block-click" : "")} onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut} onClick={calculateImc}>{buttonText}</button>
    </div>
  );
}

export default LeftSide;