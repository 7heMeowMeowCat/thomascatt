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
   .styles('resources/sass/style.css', 'public/style.css');