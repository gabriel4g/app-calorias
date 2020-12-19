// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Food from 'App/Models/Food'
import Notification from 'App/Helpers/NotificationHelper'

export default class HomeController {
  public async index({ auth, response, view }) {
    if(auth.user) {
      const USER = await auth.authenticate()

      return view.render('Auth/home', { USER })
    } else {
        response.redirect('/login')
    }
  }

  public async search({ response, request }) {
    let search = request.input('search')

    search = search.replace('ã', 'a')
    search = search.replace('â', 'a')
    search = search.replace('á', 'a')
    search = search.replace('à', 'a')
    search = search.replace('ê', 'e')
    search = search.replace('é', 'e')
    search = search.replace('è', 'e')
    search = search.replace('î', 'i')
    search = search.replace('í', 'i')
    search = search.replace('ì', 'i')
    search = search.replace('õ', 'o')
    search = search.replace('ô', 'o')
    search = search.replace('ó', 'o')
    search = search.replace('ò', 'o')
    search = search.replace('û', 'u')
    search = search.replace('ú', 'u')
    search = search.replace('ù', 'u')

    return response.redirect(`/search/${search}`)
  }

  public async page({ response, session, request, params, view }) {
    const SEARCH = params.food
    const PAGE = request.input('page', 1)
    const MESSAGE = new Notification()
    const LIMIT = 10

    let foods = await Food.query()
      .select('id', 'descricao')
      .from('foods')
      .where('descricao', 'LIKE', `%${SEARCH}%`)
      .paginate(PAGE, LIMIT)
    foods.baseUrl(`/search/${SEARCH}`)

    if(foods.isEmpty) {
      MESSAGE.notificationFlash('danger', '', 'Alimento não encontrado!', 'exclamation')
      MESSAGE.statusPage(session, response)
    }
      return view.render('Auth/search', {
        foods,
        qparams: PAGE,
      })
  }
}
