import React, { useContext } from "react";
import NutrientsContext from "../context/NutrientsContext";
import { Link } from "react-router-dom";
export default function NutritionInfo() {
  const { macroNutrients } = useContext(NutrientsContext);
  return (
    <section className="border-2 border-red-900 p-8 flex flex-col justify-start">
      <h1 className="text-center text-2xl mt-6 border-l">
        Quantidade de MacroNutrientes
      </h1>
      <div>
        <h3 className=" mt-5 text-xl font-normal text-center">
          Calculo de calorias
        </h3>
        <p>
          Para realizar o calculo de calorias foi utilizada a{" "}
          <span className="font-bold">Equação de Harris-Benedict</span> que leva
          em conta o metabolismo basal e a atividade física da pessoa.
        </p>

        <h3 className="text-xl mt-3">
          Passo 1: Determine a taxa metabólica basal (TMB)
        </h3>
        <p>
          <span className="font-bold">Homens:</span> TMB = 66 + (13.7 x peso em
          quilogramas) + (5 x altura em centímetros) – (6.8 x idade em anos)
        </p>
        <p>
          <span className="font-bold">Mulheres:</span> TMB = 655 + (9.6 X peso
          em quilogramas) + (1.8 X altura em centímetros) – (4.7 x idade em
          anos)
        </p>
        <p>
          Passo 2: Multiplique o valor da TMB pelo fator de atividade física
          adequado
        </p>
        <p>
          Caso queira ver mais informações, clique{" "}
          <Link className="font-bold" to="/about">
            Aqui
          </Link>{" "}
        </p>
        <h3 className="font-bold text-center text-xl mt-4">
          {" "}
          O seu resultado foi: {macroNutrients.calories} calorias diárias
        </h3>
        <h3 className="mt-5 text-xl font-normal text-center">
          Calculo de proteinas
        </h3>
        <p>
          Para o calculo de proteínas foi feito o calculo com base em seu nível
          de atividade física para mais informações clique{" "}
          <Link className="font-bold" to="/about">
            Aqui
          </Link>
        </p>
        <h3 className="font-bold text-center text-xl mt-4">
          {" "}
          O seu resultado foi: {macroNutrients.protein} proteínas diárias
        </h3>
      </div>
    </section>
  );
}
