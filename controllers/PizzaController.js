
import {request, response} from 'express'
import Pizza from '../models/Pizza.js'
import { createPizza, deleteById, selectPizzaById, selectPizzas, updatePizza } from '../services/pizzas-services.js'

export const getPizzas = async(req = request, res = response) => {

    
    try {
        const pizzas = await selectPizzas()

        res.status(200).json({
            count: pizzas.rowsAffected[0],
            pizzas: pizzas.recordset
        })
        
    } catch (error) {
        res.status(500).json({msg: 'Algo salio mal 😮'})
    }

}

export const getPizzasById = async(req = request, res = response) => {

    
    try {

        const {id} = req.params

        const pizzas = await selectPizzaById(id)

        res.status(200).json(pizzas.recordset[0])
        
    } catch (error) {
        res.status(500).json({msg: 'Algo salio mal 😮'})
    }

}

export const postPizza = async(req = request, res = response) => {

    
    try {

        const {nombre, libreGluten, importe, descripcion} = req.body

        const pizza = new Pizza(nombre, libreGluten, importe, descripcion)

        const pizzaCreada = await createPizza(pizza)

        res.status(200).json(pizzaCreada)
        
    } catch (error) {
        res.status(500).json({msg: 'Algo salio mal 😮'})
    }

}


export const updPizza = async(req = request, res = response) => {

    
    try {

        const {id} = req.params

        const {nombre, libreGluten, importe, descripcion} = req.body
        
        const pizza = new Pizza(nombre, libreGluten, importe, descripcion)

        const pizzas = await updatePizza(pizza, id)

        if (pizzas.rowsAffected[0] === 0) {
            return res.status(404).json(`Pizza numero ${id} no encontrada`)
        }

        res.status(200).json(`Pizza numero ${id} actualizada`)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Algo salio mal 😮'})
    }

}

export const deletePizza = async(req = request, res = response) => {

    
    try {

        const {id} = req.params

        const pizzas = await deleteById(id)

        console.log(pizzas.rowsAffected[0]);

        if (pizzas.rowsAffected[0] === 0) {
            console.log("Hla");
            return res.status(404).json(`Pizza numero ${id} no encontrada`)
            
        }

        res.status(200).json(`Pizza numero ${id} eliminada`)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Algo salio mal 😮'})
    }

}