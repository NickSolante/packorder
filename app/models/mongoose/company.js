const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const companySchema = new Schema({
  company_id: { type: String },
  name: { type: String },
});

module.exports = mongoose.model('Company', companySchema);
