

import Router from 'express'
import { check } from 'express-validator'
import { deletePizza, getPizzas, getPizzasById, postPizza, updPizza } from '../controllers/PizzaController.js'
import fieldValidation from '../middlewares/fieldValidation.js'

const route = Router()


route.get('/', getPizzas)

route.get('/:id',
    check('id', "El id no es valido").isNumeric(),
    fieldValidation
, getPizzasById)

route.post('/',
    check('nombre', "El id no es valido").isString(),
    check('libreGluten', "Libre de gluten debe ser un bool").isBoolean(),
    check('importe', "El importe no es valido").isNumeric(),
    check('descripcion', "La descripcion no es valida").isString(),
    fieldValidation
, postPizza)

route.put('/:id',
    check('nombre', "El id no es valido").isString(),
    check('libreGluten', "Libre de gluten debe ser un bool").isBoolean(),
    check('importe', "El importe no es valido").isNumeric(),
    check('descripcion', "La descripcion no es valida").isString(),
    check('id', "El id no es valido").isNumeric(),
    fieldValidation
, updPizza)

route.delete('/:id',
    check('id', "El id no es valido").isNumeric(),
    fieldValidation
, deletePizza)

export default route


