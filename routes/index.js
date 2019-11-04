var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'index' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'index' });
});

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { layout: 'layout-home', title: 'Home'});
});

/*Get product */
router.get('/index-2', function(req, res, next) {
  res.render('index-2', { title: 'index-2' });
});
/*GET filter*/
router.get('/shop-left-sidebar',function(req,res,next){
  res.render('shop-left-sidebar',{title:'shop-left-sidebar'});
});

/*Get checkout */

router.get('/checkout', function(req, res, next) {
  res.render('checkout', { title: 'checkout',  page:'CHECKOUT'});
});

/* GET login register page */
router.get('/login-register', function(req, res, next) {
  res.render('login-register', { title: 'login-register',  page:'LOGIN'});
});

/* GET cart */
router.get('/shopping-cart', function(req, res, next) {
  res.render('shopping-cart', { title: 'shopping-cart',  page:'SHOPPING CART'});
});

/* GET product detail */
router.get('/single-product', function(req, res, next) {
  res.render('single-product', { title: 'single-product',  page:'PRODUCT DETAIL'});
});
module.exports = router
