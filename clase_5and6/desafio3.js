//import moment
const moment = require('moment');

const today = moment().format('YYYY-MM-DD');
const birthDate = moment('1993-08-25').format('YYYY-MM-DD');
const age = moment().diff(birthDate, 'years');
console.log(`Hoy es ${today} y tu edad es ${age}`);