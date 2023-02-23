import React from 'react'
import NutrientsContext from './NutrientsContext';
import { useState } from 'react';

export default function NutrientsProvider({children}) {
    const [ macroNutrients, setMacroNutrients ] = useState();
  return (
    <NutrientsContext.Provider 
    value={{macroNutrients,setMacroNutrients}}
    >
        {children}
    </NutrientsContext.Provider>
  )
}
