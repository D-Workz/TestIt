//MIT License

//Copyright (c) 2016 David Oberhofer

//Permission is hereby granted, free of charge, to any person obtaining a copy
//of this software and associated documentation files (the 'Software'), to deal
//in the Software without restriction, including without limitation the rights
//to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//copies of the Software, and to permit persons to whom the Software is
//furnished to do so, subject to the following conditions:

//The above copyright notice and this permission notice shall be included in all
//copies or substantial portions of the Software.

//THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//SOFTWARE.
(function () {
    'use strict';
    const Promise = require('bluebird');
    const User = require('../models/User');
    const AccessToken = require('../models/AccessToken');
    const crypto = require('../crypto');
    const logger = require('proxey-ilogger')('UserEdit');
    const template = require('../enum/template');
    const mailer = require('../mailer');
    const config = require('../config');
    let router = require('express').Router();


    router.get('/user/:user', Promise.coroutine(function*(req, res) {
        res.send(yield User.findOne({user: req.params.user}).select('user email name permissions'));
    }));

    router.get('/users',  Promise.coroutine(function*(req, res) {
        res.send(yield User.find().sort('-user').select('user email name permissions'));
    }));


    module.exports = router;
})();
