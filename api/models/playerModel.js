import mongoose from "mongoose";
//mongoose-unique-validator améliore les messages d'erreur lors de l'enregistrement de données uniques
import uniqueValidator from 'mongoose-unique-validator'

const playerSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});
playerSchema.plugin(uniqueValidator);

export default mongoose.model("player", playerSchema);