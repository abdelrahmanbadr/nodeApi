var app = require('./app');



var productsRoutes =require('./routes/productsApi');
var ordersRoutes =require('./routes/ordersApi');
var usersRoutes =require('./routes/usersApi');

//any request start with products will be forwarded to productsRoutes
app.use('/products',productsRoutes);
app.use('/orders',ordersRoutes);
app.use('/users',usersRoutes);