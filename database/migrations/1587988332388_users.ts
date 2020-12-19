import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 90).notNullable()
      table.string('email', 255).notNullable().unique
      table.string('password', 180).notNullable()
      table.float('weight', 5,2)
      table.float('height', 5,2)
      table.date('birthday')
      table.string('wc', 1)
      table.string('location', 120)
      table.string('relationship', 20)
      table.string('sexual_orientation', 26)
      table.integer('permission', 1).notNullable() // 0: ADM, 1: MOD, 2: USER
      table.string('remember_me_token').nullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
