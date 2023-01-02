import React, { useState } from 'react';
import '../App.css';

type Imc = {
  setImc: React.Dispatch<React.SetStateAction<number>>;
  setShowResult: React.Dispatch<React.SetStateAction<boolean>>;
  showResult: boolean;
}

function LeftSide({ setImc, setShowResult, showResult }: Imc) {

  const [weigh, setW] = useState<number>();
  const [height, setH] = useState<number>();
  const [buttonText, setBtext] = useState<string>("Calcular");
  const [blockedClass, setBlocked] = useState(false);
  const [calculated, setCalculated] = useState(false);
  const [m, setM] = useState<string>("");
  const [kg, setKg] = useState<string>("");

  let backspaceClicked: boolean;

  const handleKeyDown = (event: { keyCode: number; }) => {
    if (event.keyCode === 8) {
      backspaceClicked = true;
    } else {
      backspaceClicked = false;
    }
  }

  const handleInputValidator = (event: React.ChangeEvent<HTMLInputElement>) => {

    let inputValueString = event.target.value;

    if (event.target.classList.contains("height")) {

      if (inputValueString[1] != '.') {
        let arrayString = [...inputValueString];
        arrayString.splice(1, 0, '.');
        inputValueString = arrayString.toString().replaceAll(',', '');
      }

      let inputValueNumber = parseFloat(inputValueString);

      if (inputValueString.length <= 4) {
        setM("M");
        if (inputValueNumber == 0 || Number.isNaN(inputValueNumber)) {
          setH(undefined);
          setM("");
        } else {
          (inputValueNumber < 0) ? setH(0) : setH(inputValueNumber);
        }
      }

    } else {

      if (!backspaceClicked) {

        if (inputValueString[2] != undefined && inputValueString[1] != '.' &&
          inputValueString[2] != '.' && inputValueString[4] == undefined && inputValueString[5] == undefined) {
          let arrayString = [...inputValueString];
          arrayString.splice(3, 0, '.');
          inputValueString = arrayString.toString().replaceAll(',', '');
        }

      }

      let inputValueNumber = parseFloat(inputValueString)

      if (inputValueString.length <= 6) {
        setKg("KG");
        if (inputValueNumber == 0 || Number.isNaN(inputValueNumber)) {
          setKg("");
          setW(undefined);
        } else {
          (inputValueNumber < 0) ? setW(0) : setW(inputValueNumber);
        }
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

    if ((h > 0 && w > 0 && w <= 300 && h <= 2.25) && showResult == false) {
      setImc(imc);
      setShowResult(true);
      setCalculated(true);
      setBtext("Efetuar Novo Cálculo");
    }

    if (showResult == true) {
      setShowResult(false);
      setBtext("Calcular");
      setCalculated(false);
      setBlocked(true);
      setBtext("Insira os Dados Corretamente");
      setH(NaN);
      setW(NaN);
      setKg("");
      setM("");
    }
  }

  const handleMouseOver = () => {

    let h: number = (height == undefined) ? 0 : height;
    let w: number = (weigh == undefined) ? 0 : weigh;

    if (showResult == false && (h <= 0 || w <= 0 || w > 300 || h > 2.25)) {
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

  console.log(calculated)

  return (
    <div className='col-2 row column pr-25 jc-center'>
      <h1 className='title'>Calcule o seu IMC</h1>
      <p className='subtitle mt-20'>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
      <div className='row w-95'>
        {calculated
          ?
          <input className='input-number height mt-30' type="number" value={height} readOnly placeholder='Digite a sua altura em métros (Ex: 1.69m)' />
          :
          <input className='input-number height mt-30' type="number" value={height} onChange={handleInputValidator} placeholder='Digite a sua altura em métros (Ex: 1.69m)' />
        }
        <span className='d-flex al-end measures'>{m}</span>
      </div>
      <div className='row w-95'>
        {calculated
          ?
          <input className='input-number weigh mt-10' type="number" max={300} value={weigh} readOnly placeholder='Digite o seu peso em quilogramas (Ex: 75.65kg)' />
          :
          <input className='input-number weigh mt-10' type="number" max={300} value={weigh} onKeyDown={handleKeyDown} onChange={handleInputValidator} placeholder='Digite o seu peso em quilogramas (Ex: 75.65kg)' />
        }
        <span className='d-flex al-end measures'>{kg}</span>
      </div>
      <button className={'mt-50 button-calculate smooth-transition hover-scale' + ((blockedClass == true) ? " block-click" : "")} onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut} onClick={calculateImc}>{buttonText}</button>
    </div>
  );
}

export default LeftSide;