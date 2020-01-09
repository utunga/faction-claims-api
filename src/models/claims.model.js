// claims-model.js - A mongoose model

var uuid = require('node-uuid');
 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const claims = new Schema({
    fact_id: { type: String, default: uuid.v1 },
    content: { type: String, required: true },
    estimate: { type: Number, default: 0.5 },
    attribution:  { type: String},
    due: { type: Date },
    for: { type: String },
    completed: { type: Number },
    accepted: { type: String },
    evidence: { type: String }
  }, {
    timestamps: true
  });

  return mongooseClient.model('claims', claims);
};
