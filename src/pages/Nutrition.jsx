import React, { Component } from 'react'
import fetchApi from '../service/api'
import FoodTable from '../components/FoodTable';

export default class Nutrition extends Component {
    state = {
        food: '',
        searchName: '',
        nutrients: {},
    }


    handleSubmit = async () => {
        const { food } = this.state;
        const result = await fetchApi(food);
        this.setState({ nutrients: result, searchName: food });
        console.log(result)
    }

    render() {
        const { food, nutrients, searchName } = this.state
        return (
            <div>
                <input type='text' value={food} onChange={(e) => { this.setState({ food: e.target.value }) }} />
                <button onClick={this.handleSubmit}>Pesquisar</button>
                {searchName && <h3>{searchName}</h3>}
                {searchName && <FoodTable {...nutrients}/>}
            </div>
        )
    }
}
