
exports.up = async function(knex) {
  await knex.schema.createTable("fruits", (table)=>{
      //table.integer("id").notNull().unique().primary()
      //translates to
      table.increments("id")
      //translkate to "name" NOT NULL UNIQUE
      table.text("name").notNull().unique()
      //translates to "avgWeightOz" FLOAT
      table.float("avgWeightOz")
      //translate to "delicious" BOOLEAN DEFAULT 0
      table.boolean("delicious").defaultTo(false)
  })
};

//should always reverse our up
//like our migration never ran
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("fruits")
};
