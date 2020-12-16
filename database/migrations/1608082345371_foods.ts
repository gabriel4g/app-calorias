import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Foods extends BaseSchema {
  protected tableName = 'foods'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('descricao', 120).notNullable()
      table.float('umidade_porcentagem', 7,2).notNullable()
      table.float('energia_kcal', 7,2).notNullable()
      table.float('energia_kj', 7,2).notNullable()
      table.float('proteina_g', 7,2).notNullable()
      table.float('lipideos_g', 7,2).notNullable()
      table.float('colesterol_mg', 7,2).notNullable()
      table.float('carboidrato_g', 7,2).notNullable()
      table.float('fibra_alimentar_g', 7,2).notNullable()
      table.float('cinzas_g', 7,2).notNullable()
      table.float('calcio_mg', 7,2).notNullable()
      table.float('magnesio_mg', 7,2).notNullable()
      table.float('manganes_mg', 7,2).notNullable()
      table.float('fosforo_mg', 7,2).notNullable()
      table.float('ferro_mg', 7,2).notNullable()
      table.float('sodio_mg', 7,2).notNullable()
      table.float('potassio_mg', 7,2).notNullable()
      table.float('cobre_mg', 7,2).notNullable()
      table.float('zinco_mg', 7,2).notNullable()
      table.float('retinol_mcg', 7,2).notNullable()
      table.float('RAE_mcg', 7,2).notNullable()
      table.float('RE_mcg', 7,2).notNullable()
      table.float('tiamina_mg', 7,2).notNullable()
      table.float('riboflavina_mg', 7,2).notNullable()
      table.float('piridoxina_mg', 7,2).notNullable()
      table.float('niacina_mg', 7,2).notNullable()
      table.float('vitamina_c_mg', 7,2).notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
