class SiteController {
    // [GET] /home
    index(req, res) {
        res.render('home');
    }

    // [GET] /Search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
