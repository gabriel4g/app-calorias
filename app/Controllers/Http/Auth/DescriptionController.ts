// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Food from 'App/Models/Food'

export default class DescriptionsController {
  public async index({ params, auth, response, view }) {
    if(auth.user) {
      const USER = await auth.authenticate()

      const SEARCH = params.id

      let food = await Food.find(SEARCH)


      return view.render('Auth/desc', {
        USER,
        food: food.toJSON()
       })
    } else {
        response.redirect('/login')
    }
  }

  public async search({ request, params, view }) {
    const SEARCH = params.id
    const AMOUNT = request.input('amount')

    let food = await Food.find(SEARCH)

      return view.render('Auth/desc', {
        food: food.toJSON(),
        calc: ((food.carboidrato_g * 4) + (food.proteina_g * 4) + (food.lipideos_g *9))* AMOUNT
      })
  }
}
