import React, { useEffect, useState, useContext } from "react";
import calculateCalories from "../utils/calculateMacro";
import NutrientsContext from "../context/NutrientsContext";

export default function Form() {
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [height, setHeight] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const { setMacroNutrients } = useContext(NutrientsContext);

  useEffect(() => {
    if ((sex && age && weight && height, activityLevel)) {
      setIsFormValid(true);
    }
  }, [sex, age, weight, height, activityLevel]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(calculateCalories(weight, height, age, sex, activityLevel));
    const userInfo = {
      calories: calculateCalories(weight, height, age, sex, activityLevel).calories,
      protein: calculateCalories(weight, height, age, sex, activityLevel).protein,
      activityLevel: activityLevel
    }
    setMacroNutrients(userInfo)
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8"
    >
      <div className="mt-6 ">
        <h3 className="font-bold text-lg mb-2">Selecione seu sexo:</h3>
        <div className="flex items-center">
          <label htmlFor="male" className="inline-flex items-center">
            <input
              type="radio"
              id="male"
              value="male"
              checked={sex === "male"}
              onChange={(event) => setSex(event.target.value)}
              className="form-radio h-5 w-5 text-gray-600"
            />
            <span className="ml-2 text-gray-700">Masculino</span>
          </label>

          <label htmlFor="female" className="inline-flex items-center ml-6">
            <input
              type="radio"
              id="female"
              value="female"
              checked={sex === "female"}
              onChange={(event) => setSex(event.target.value)}
              className="form-radio h-5 w-5 text-gray-600"
            />
            <span className="ml-2 text-gray-700">Feminino</span>
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-bold text-lg mb-2" htmlFor="age">
          Idade:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          pattern="[0-9]*"
          type="number"
          id="age"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block font-bold text-lg mb-2" htmlFor="weight">
          Peso (em KG):
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          pattern="[0-9]*"
          type="number"
          id="weight"
          value={weight}
          onChange={(event) => setWeight(event.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block font-bold text-lg mb-2" htmlFor="height">
          Altura:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          pattern="[0-9]*"
          type="number"
          id="height"
          value={height}
          onChange={(event) => setHeight(event.target.value)}
        />
      </div>

      <div className="my-6">
        <label className="block text-gray-700 font-bold mb-2">
          <h3>Escolha quantas vezes você pratica atividade física:</h3>
        </label>
        <div className="flex flex-col">
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="none"
              value="none"
              className="mr-2 leading-tight"
              checked={activityLevel === "none"}
              onChange={(event) => setActivityLevel(event.target.value)}
            />
            <label htmlFor="none" className="text-gray-700">
              Não pratica atividade física
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="1-3"
              value="1-3"
              className="mr-2 leading-tight"
              checked={activityLevel === "1-3"}
              onChange={(event) => setActivityLevel(event.target.value)}
            />
            <label htmlFor="1-3" className="text-gray-700">
              Pratica atividade física de 1 a 3 vezes por semana
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="3-5"
              value="3-5"
              className="mr-2 leading-tight"
              checked={activityLevel === "3-5"}
              onChange={(event) => setActivityLevel(event.target.value)}
            />
            <label htmlFor="3-5" className="text-gray-700">
              Pratica atividade física de 3 a 5 vezes por semana
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="everyday"
              value="everyday"
              className="mr-2 leading-tight"
              checked={activityLevel === "everyday"}
              onChange={(event) => setActivityLevel(event.target.value)}
            />
            <label htmlFor="everyday" className="text-gray-700">
              Pratica atividade física todos os dias
            </label>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={!isFormValid}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Enviar
      </button>
    </form>
  );
}
