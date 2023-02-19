import React, { useEffect, useState } from 'react';
import './Form.css'
import calculateCalories from '../utils/calculateMacro'


export default function Form() {
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [height, setHeight] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);


  useEffect(() => {
    if (sex && age && weight && height, activityLevel) {
        setIsFormValid(true);
    }
}, [sex, age, weight, height, activityLevel]);



  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(calculateCalories(weight, height, age, sex, activityLevel))
  }

  return (
    <form onSubmit={handleSubmit} className="my-form">
      <div>
        <h3> Selecione seu sexo: </h3>
        <div className="sex-options">

          <label className={sex === 'male' ? 'sex-label selected' : 'sex-label'} htmlFor="male">
            <input
              className="sex-option"
              type="radio"
              id="male"
              value="male"
              checked={sex === 'male'}
              onChange={event => setSex(event.target.value)}
            />
            Masculino
          </label>

          <label className={sex === 'female' ? 'sex-label selected' : 'sex-label'} htmlFor="female">
            <input
              className="sex-option"
              type="radio"
              id="female"
              value="female"
              checked={sex === 'female'}
              onChange={event => setSex(event.target.value)}
            />
            Feminino
          </label>
        </div>
      </div>
      <div>
        <label>
          Idade:
          <input
            pattern="[0-9]*"
            type="number"
            value={age}
            onChange={event => setAge(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Peso (em KG):
          <input
            pattern="[0-9]*"
            type="number"
            value={weight}
            onChange={event => setWeight(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Altura:
          <input
            pattern="[0-9]*"
            type="number"
            value={height}
            onChange={event => setHeight(event.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          <h3>Escolha quantas vezes você pratica atividade física:</h3>
        </label>
        <div className="form-radio-group">
          <div>
            <input
              type="radio"
              id="none"
              value="none"
              checked={activityLevel === 'none'}
              onChange={event => setActivityLevel(event.target.value)}
            />
            <label htmlFor="none">Não pratica atividade física</label>
          </div>
          <div>
            <input
              type="radio"
              id="1-3"
              value="1-3"
              checked={activityLevel === '1-3'}
              onChange={event => setActivityLevel(event.target.value)}
            />
            <label htmlFor="1-3">Pratica atividade física de 1 a 3 vezes por semana</label>
          </div>
          <div>
            <input
              type="radio"
              id="3-5"
              value="3-5"
              checked={activityLevel === '3-5'}
              onChange={event => setActivityLevel(event.target.value)}
            />
            <label htmlFor="3-5">Pratica atividade física de 3 a 5 vezes por semana</label>
          </div>
          <div>
            <input
              type="radio"
              id="everyday"
              value="everyday"
              checked={activityLevel === 'everyday'}
              onChange={event => setActivityLevel(event.target.value)}
            />
            <label htmlFor="everyday">Pratica atividade física todos os dias</label>
          </div>
        </div>
      </div>
      <button type="submit" disabled={!isFormValid} className="submit-button">Enviar</button>
    </form>
  )
}