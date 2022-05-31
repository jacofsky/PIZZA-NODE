

import Router from 'express'
import { getPizzas } from '../controllers/PizzaController.js'

const route = Router()


route.get('/', getPizzas)

export default route


