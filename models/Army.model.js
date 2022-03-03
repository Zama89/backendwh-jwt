const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const armySchema = new Schema({
  heroe: { type: String, enum: ['Thorgrim', 'Ungrim'] },
  general: { type: String, enum: ['Maestro Ingeniero', 'Herrero Rúnico', 'Señor del Clan'] },
  infantry: { type: String, enum: ['Guerreros Enanos', 'Rompehierros', 'Barbaslargas', 'Matadores', 'Mineros', 'Ballesteros', 'Atronadores', 'Dracohierros'] },
  artillery: { type: String, enum: ['Lanzaagravios', 'Cañón', 'Cañón órgano', 'Lanzallamas', 'Girocóptero', 'Girocóptero bombardero'] },
  name: String,
  advice: String,
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Army = mongoose.model('Army', armySchema);

const proveArmy = async () => {
  const heroe = 'Thorgrim';
  const general = 'Maestro Ingeniero';
  const infantry = 'Guerreros Enanos';
  const artillery = 'Cañón';
  const name = 'ModeloPrueba';
  const advice = 'No sirve de nada';
  const army = await Army.create({ heroe, general, infantry, artillery, name, advice });
  console.log(army);
};

/*proveArmy();*/

module.exports = Army;
