import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Food extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public descricao: string

  @column()
  public umidade_porcentagem: number

  @column()
  public energia_kcal: number

  @column()
  public energia_kj: number

  @column()
  public proteina_g: number

  @column()
  public lipideos_g: number

  @column()
  public colesterol_mg: number

  @column()
  public carboidrato_g: number

  @column()
  public fibra_alimentar_g: number

  @column()
  public cinzas_g: number

  @column()
  public calcio_mg: number

  @column()
  public magnesio_mg: number

  @column()
  public manganes_mg: number

  @column()
  public fosforo_mg: number

  @column()
  public ferro_mg: number

  @column()
  public sodio_mg: number

  @column()
  public potassio_mg: number

  @column()
  public cobre_mg: number

  @column()
  public zinco_mg: number

  @column()
  public retinol_mcg: number

  @column()
  public RAE_mcg: number

  @column()
  public RE_mcg: number

  @column()
  public tiamina_mg: number

  @column()
  public riboflavina_mg: number

  @column()
  public piridoxina_mg: number

  @column()
  public niacina_mg: number

  @column()
  public vitamina_c_mg: number
}
