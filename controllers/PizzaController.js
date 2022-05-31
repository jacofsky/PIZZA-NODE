
import {request, response} from 'express'
import { selectPizzas } from '../services/pizzas-services.js'

export const getPizzas = async(req = request, res = response) => {

    
    try {
        const pizzas = await selectPizzas()

        res.status(200).json(pizzas)
        
    } catch (error) {
        res.status(500).json({msg: 'Algo salio mal 😮'})
    }

}