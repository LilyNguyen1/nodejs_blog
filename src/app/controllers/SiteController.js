class SiteController {
    // [GET] /
    home(req, res) {
        //we can use index or home are still ok, no problem
        res.render('home');
    }

    // [GET] / search
    search(req, res) {
        res.render('search');
    }
}
//1.Action > 2.Dispatcher > 3.Function handler:
//1. the action when client enter path '/search' is Action
//2. Dispatcher stand between 1 and 3, it's mission is to read which action/route, if that route/path matches, Dispatcher send request to Function handler that matches that route/path
//3. Function handler execute
//Function handler is this part: (req, res) => { res.render('search')}
//Controller in MVC diagram is Function handler

module.exports = new SiteController();
