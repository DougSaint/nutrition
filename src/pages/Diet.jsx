import React, { useContext } from 'react'
import NutrientsContext from '../context/NutrientsContext'
import Form from '../components/Form';
import NutritionInfo from '../components/NutritionInfo';

export default function Diet() {

  const {macroNutrients} = useContext(NutrientsContext)

  return (
    <main className='w-full grid  grid-cols-1 md:grid-cols-2'>
      <Form />
      {macroNutrients && <NutritionInfo />}
     
    </main>
  )
}


