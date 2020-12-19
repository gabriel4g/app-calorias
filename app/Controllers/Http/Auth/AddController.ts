// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Notification from 'App/Helpers/NotificationHelper'
import Food from 'App/Models/Food'

export default class AddController {
  public async index({ auth, response, view }) {
    if(auth.user) {
      const USER = await auth.authenticate()

      return view.render('Auth/addFood', { USER })
    } else {
        response.redirect('/login')
    }
  }

  public async store({ request, session, response }) {
    const MESSAGE = new Notification()
    const FOOD = new Food()

    const { DESCRIPTION, FATS, CARBOHYDRATES, PROTEINS } = request.all()

    try {
      FOOD.descricao = DESCRIPTION
      FOOD.lipideos_g = FATS
      FOOD.carboidrato_g = CARBOHYDRATES
      FOOD.proteina_g = PROTEINS
      FOOD.umidade_porcentagem = 0
      FOOD.energia_kcal = 0
      FOOD.energia_kj = 0

      FOOD.colesterol_mg = 0
      FOOD.fibra_alimentar_g = 0
      FOOD.cinzas_g = 0
      FOOD.calcio_mg = 0
      FOOD.magnesio_mg = 0
      FOOD.manganes_mg = 0
      FOOD.fosforo_mg = 0
      FOOD.ferro_mg = 0
      FOOD.sodio_mg = 0
      FOOD.potassio_mg = 0
      FOOD.cobre_mg = 0
      FOOD.zinco_mg = 0
      FOOD.retinol_mcg = 0
      FOOD.RAE_mcg = 0
      FOOD.RE_mcg = 0
      FOOD.tiamina_mg = 0
      FOOD.riboflavina_mg = 0
      FOOD.piridoxina_mg = 0
      FOOD.niacina_mg = 0
      FOOD.vitamina_c_mg = 0

      await FOOD.save()

      MESSAGE.notificationFlash('success', '', 'Alimento cadastrado!', 'check')
      MESSAGE.status(session, response)
    } catch(err) {

         MESSAGE.notificationFlash('danger', '', 'Não foi possivel cadastro o novo alimento!', 'exclamation')
        MESSAGE.status(session, response)
        console.log(err)
    }
  }

}
