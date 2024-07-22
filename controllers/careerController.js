const Career = require('../models/career');

exports.getCareers = async(req, res) => {
    try {
        const careers = await Career.findAll();
        res.render('index', {
            careers,
            editing: false
        });
    } catch (err) {
        res.status(500).json({ error: 'Something went wrong' });
    }
};

exports.search=async(req, res)=>{
    try{
        const careerId=req.body.careerId;
        const cricketer=await Career.findByPk(careerId);
        res.render('index',{
            career: cricketer
        })
    } catch(err){
        res.status(500).json({ error: "searching not working"});
    }
}
exports.createCareer = async(req, res) => {
    try {
        const { name, url, birth_place, career, no_matches, score, fifties, centuries, wickets, average } = req.body;
        await Career.create({ name, url, birth_place, career, no_matches, score, fifties, centuries, wickets, average });
        res.redirect('/');
    } catch (err) {
        res.status(500).json({ error: 'Something went wrong' });
    }
};

exports.getEditCareer = async(req, res) => {
    try {
        const edit = req.query.edit;
        if (!edit) return res.redirect('/');
        const careerId = req.params.id;

        const career = await Career.findByPk(careerId);
        res.render('index', {
            editing: edit,
            career: career
        })
    } catch (err) {
        res.status(500).json({ error: 'getcareer not working' });
    }

}
exports.postEditCareer = async(req, res) => {
    try {
        const { careerId, name, url, birth_place, career, no_matches, score, fifties, centuries, wickets, average  } = req.body;
        await Career.update({ careerId, name, url, birth_place, career, no_matches, score, fifties, centuries, wickets, average }, { where: { id: careerId } });
        res.redirect('/');
    } catch (err) {
        res.status(500).json({ error: 'Something went wrong' });
    }
};