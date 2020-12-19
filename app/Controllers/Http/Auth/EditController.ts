// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Notification from 'App/Helpers/NotificationHelper'
import Food from 'App/Models/Food'

export default class EditController {
  public async index({ auth, params, response, view }) {
    if(auth.user) {
      const USER = await auth.authenticate()
      const FOOD = await Food.find(params.id)

      return view.render('Auth/editFood', { food: FOOD, user: USER })
    } else {
        response.redirect('/login')
    }
  }

  public async store({ params, request, session, response }) {
    const MESSAGE = new Notification()
    const FOOD = await Food.find(params.id)

    const { DESCRIPTION, FATS, CARBOHYDRATES, PROTEINS } = request.all()

    try {
      if(FOOD) {
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
      }



      MESSAGE.notificationFlash('success', '', 'Alimento ediato!', 'check')
      MESSAGE.status(session, response)

      return response.redirect('/')
    } catch(err) {

        MESSAGE.notificationFlash('danger', '', 'Não foi possivel editar o novo alimento!', 'exclamation')
        MESSAGE.status(session, response)
        console.log(err)
    }


  }

  public async destroy({ params, response, session}) {
    const FOOD = await Food.find(params.id);
    const MESSAGE = new Notification()

    try {
      if(FOOD) {
        FOOD.delete()
        MESSAGE.notificationFlash('success', '', 'Alimento apagado!', 'check')
        MESSAGE.statusHome(session, response)

      }
    } catch(err) {
        MESSAGE.notificationFlash('danger', '', 'Erro ao deletar alimento!', 'exclamation')
        MESSAGE.statusHome(session, response)
    }
  }

}
