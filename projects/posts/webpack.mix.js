const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.disableSuccessNotifications();

mix.js('resources/js/app.js', 'public/js')
   .react('resources/jsx/home.jsx', 'public/js/home.js')
   .react('resources/jsx/commons.jsx', 'public/js/commons.js')
   .react('resources/jsx/secure_internals.jsx', 'public/js/secure_internals.js')
   .react('resources/jsx/post.jsx', 'public/js/post.js')
   .styles('resources/sass/style.css', 'public/style.css');