// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'
import Notification from 'App/Helpers/NotificationHelper'

export default class LoginController {
  public async index({ view, auth, response }) {
    const COUNT = await User.query().from('users').count('id as total_count')
    if(auth.user) return response.redirect('/')
    console.log(COUNT)
    return view.render('login', { count: COUNT[0]})
  }

  public async check({ request, session, response, auth }) {
    const { EMAIL, PASSWORD } = request.all()
    const MESSAGE = new Notification()

    const USER = await User.query()
    .where('email', EMAIL)
    .first()

    if(USER) {
      if(Hash.verify(USER.password, PASSWORD)) {
        auth.login(USER)

        return response.redirect('/')
      }
    }

    MESSAGE.notificationFlash('warning', '', 'E-mail ou senha, estão incorretos!', 'exclamation-triangle')
    MESSAGE.status(session, response)
  }

  public async logout({ auth, response }) {
    await auth.logout()

    return response.redirect('/login')
  }

}
