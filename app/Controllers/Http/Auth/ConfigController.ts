// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ConfigController {
  public async index({ response, view, auth }) {
      if(auth.user) {
          return view.render('Auth/config/index', {
            user: auth.user,
          })
      } else {
          response.redirect('/login')
      }
  }
}
