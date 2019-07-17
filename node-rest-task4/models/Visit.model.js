const mongoose = require('mongoose');

const VisitSchema = mongoose.Schema({
    visitorName: { type: String },
    assistantName: { type: String },
    visitorAge: { type: Number },
    visitDate: { type: String },
    visitTime: { type: String },
    visitorComment: { type: String },
    date: {type: Date, default: Date.now }
});

module.exports = mongoose.model('Visits', VisitSchema);
