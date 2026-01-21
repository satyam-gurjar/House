


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

exports.postSignUp= (req, res, next) => {
  console.log(req.body);
  res.redirect('/')
}
  

exports.postLogout = (req,res,next) => {
  req.session.destroy(() => {
    res.redirect('/login');
  })
  // res.cookie('isLoggedIn',false); 
}