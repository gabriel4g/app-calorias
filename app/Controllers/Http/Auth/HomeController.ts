// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Food from 'App/Models/Food'

export default class HomeController {
  public async index({ auth, response, view }) {
    if(auth.user) {
      const USER = await auth.authenticate()

      return view.render('Auth/home', { USER })
    } else {
        response.redirect('/login')
    }
  }

  public async search({ request, view }) {
    const SEARCH = request.input('search')

    let food = await Food.query()
      .select('id', 'descricao')
      .from('foods')
      .where('descricao', 'LIKE', `%${SEARCH}%`)

      return view.render('Auth/home', {
        food
      })
  }
}
