import React, { Component } from 'react';

class FoodTable extends Component {
  render() {
    const { calories, totalWeight, totalNutrientsKCal } = this.props;
    return (
      <table className="food-table">
        <thead>
          <tr>
            <th className="food-table-header">Calorias</th>
            <th className="food-table-header">Peso</th>
            <th className="food-table-header">Valor Energético</th>
          </tr>
        </thead>
        <tbody>
          <tr className="food-table-row">
            <td className="food-table-cell">{calories}</td>
            <td className="food-table-cell">{totalWeight}</td>
            <td className="food-table-cell">{totalNutrientsKCal.ENERC_KCAL.quantity}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default FoodTable;