import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import PizzaRoute from '../routes/PizzaRoutes.js'

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT

        this.paths = {
            pizza: '/api/pizza'
        }

        this.middlewares()
        this.routes()

    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
    }

    routes() {
        this.app.use(this.paths.pizza, PizzaRoute)
    }

    listen() {
        this.app.listen(this.port, () => console.log(`Server on: ${this.port} PORT`))
    }
}

export default Server