const { Pool } = require('pg');
const pool = new Pool({
  user: 'اسم_المستخدم', // عدلها حسب إعداداتك
  host: 'localhost',
  database: 'اسم_قاعدة_البيانات', // عدلها حسب إعداداتك
  password: 'كلمة_المرور', // عدلها حسب إعداداتك
  port: 5432,
});
module.exports = pool; 