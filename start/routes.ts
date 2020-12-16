/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'Auth/HomeController.index').middleware('auth')
Route.post('/', 'Auth/HomeController.search').middleware('auth')
Route.get('/u/:id', 'Auth/UserController.index').middleware('auth')

Route.group(() => {
  Route.get('/:id', 'Auth/DescriptionController.index')
  Route.post('/:id', 'Auth/DescriptionController.search')
}).prefix('/desc').middleware('auth')

Route.group(() => {
  Route.get('/', 'LoginController.index')
  Route.post('/', 'LoginController.check')
}).prefix('/login')

Route.group(() => {
  Route.get('/', 'RegisterController.index')
  Route.post('/', 'RegisterController.store')
}).prefix('/join')

Route.group(() => {
  Route.get('/', 'Auth/ConfigController.index')
  Route.get('/profile', 'Auth/UserController.edit')
  Route.post('/profile', 'Auth/UserController.update')
  Route.get('/profile/remove', 'Auth/UserController.destroy')
}).prefix('/config').middleware('auth')
