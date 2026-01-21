const { check, validationResult } = require('express-validator');

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    pageTitle: 'Login',
    currentPage: 'login',
    isLoggedIn: false
  });
}

exports.getSignUp = (req, res, next) => {
  res.render('auth/signup', {
    pageTitle: 'signup',
    currentPage: 'signup',
    isLoggedIn: false
  });
}

exports.postLogin = (req, res, next) => {
  req.session.isLoggedIn = true;
  // res.cookie("isLoggedIn", true)
  res.redirect('/')
}



exports.postSignUp = [

  check("username")
    .isEmail()
    .withMessage('Please enter a valid email')
    .normalizeEmail(),

  check("password")
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .matches(/[A-Z]/)
    .withMessage('Password must contain at least one uppercase letter')
    .matches(/[a-z]/)
    .withMessage('Password must contain at least one lowercase letter')
    .matches(/[0-9]/)
    .withMessage('Password must contain at least one number')
    .matches(/[!@#$%^&*()]/)
    .withMessage('Password must contain at least one special character')
    .trim(),

  check("confirmPassword")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords do not match');
      }
      return true;
    }),

  check("usertype")
    .isIn(['guest', 'host'])
    .withMessage('Please select a valid user type'),

  check("term")
    .custom(value => {
      if (value !== 'on') {
        throw new Error('Please accept the terms and conditions');
      }
      return true;
    }),

  (req, res, next) => {
    const { firstname, lastname, username, usertype } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).render('auth/signup', {
        pageTitle: 'Signup',
        currentPage: 'signup',
        isLoggedIn: false,
        errors: errors.array(),
        oldInput: {
          firstname,
          lastname,
          username,
          usertype
        }
      });
    }

    // SUCCESS
    res.redirect('/');
  }
];


exports.postLogout = (req,res,next) => {
  req.session.destroy(() => {
    res.redirect('/login');
  })
  // res.cookie('isLoggedIn',false); 
}