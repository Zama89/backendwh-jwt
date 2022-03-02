const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const armySchema = new Schema({
  heroe: { type: String, enum: ['Thorgrim', 'Ungrim'] },
  general: { type: String, enum: ['Maestro Ingeniero', 'Herrero Rúnico', 'Señor del Clan'] },
  infantry: { type: String, enum: ['Guerreros Enanos', 'Rompehierros', 'Barbaslargas', 'Matadores', 'Mineros', 'Ballesteros', 'Atronadores', 'Dracohierros'] },
  artillery: { type: String, enum: ['Lanzaagravios', 'Cañón', 'Cañón órgano', 'Lanzallamas', 'Girocóptero', 'Girocóptero bombardero'] },
  name: String,
  advice: String,
});

const Army = mongoose.model('Army', armySchema);

module.exports = Army;
