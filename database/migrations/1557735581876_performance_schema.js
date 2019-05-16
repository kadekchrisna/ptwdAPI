'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PerformanceSchema extends Schema {
  up () {
    this.create('performances', (table) => {
      table.increments()
      table.timestamps()
      table.integer('terget_time', 8)
      table.integer('work_time', 8)
      table.integer('achievment', 2)
      table.integer('over_time', 2)
      table.string('info', 190)
    })
  }

  down () {
    this.drop('performances')
  }
}

module.exports = PerformanceSchema
