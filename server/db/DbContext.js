import TfSchema from '../models/Transformer'

import mongoose from "mongoose";

class DbContext {

  Transformer = mongoose.model("Transformer", TfSchema)

}

export const dbContext = new DbContext()
