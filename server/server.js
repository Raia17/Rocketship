require("dotenv").config();

const express       = require("express");
const fileUpload    = require("express-fileupload");
const morgan        = require("morgan");
const bodyParser    = require("body-parser");
const cors          = require("cors");
const _             = require("lodash");

// TODO: Routes imports
const ProductRoute  = require('./routes/products');
const GenreRoute    = require('./routes/genres');
const CategoryRoute = require('./routes/categories');
const BrandRoute    = require('./routes/brands');
const AuthRoute     = require('./routes/auths');

// DB CONNECTION

// SERVER
const app = express();

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload())


// Start app
const PORT = process.env.DEFAULT_PORT || process.env.ALTERNATIVE_PORT;
app.listen(PORT, () =>
	console.log("listening on port: http://localhost:" + PORT)
);

// TODO: Routes
app.use('/api/products', ProductRoute)
app.use('/api/genre', GenreRoute)
app.use('/api/category', CategoryRoute)
app.use('/api/brands', BrandRoute)
app.use('/auth', AuthRoute)