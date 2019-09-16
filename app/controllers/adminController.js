const path = require('path')
const middleware = require('../utils/middleware')
const { check, validationResult } = require('express-validator')

// export the login controller
module.exports = function(app, passport){ 

    // redirect the user to the login page
    // no auth for testing
    app.get('/admin', 
        function(req, res) {
            res.render('admin')
        })

    // redirect the user to the manage students page
    // no auth for testing
    app.get('/admin/manageStudents',
        function(req, res) {
            res.render('manageStudents')
        })

    // redirect the user to the manage sessions page
    app.get('/admin/manageSessions', middleware.isLoggedIn,
        function(req, res) {
            res.render('manageSessions')
        })

    // redirect the user to the manage sessions page
    app.get('/admin/manageSessions/add', middleware.isLoggedIn,
        function(req, res) {
            res.render('addSession')
        })

    // redirect the user to the manage staff page
    app.get('/admin/manageSessions/assignStudent', middleware.isLoggedIn,
        function(req, res) {
            res.render('assignStudent')
        })

    // redirect the user to the manage staff page
    app.get('/admin/manageStaff', middleware.isLoggedIn,
        function(req, res) {
            res.render('manageStaff')
        })

    // redirect the user to the manage staff page
    app.get('/admin/manageStaff/add', middleware.isLoggedIn,
        function(req, res) {
            res.render('addStaff')
        })
    
    
    
}
   