const Career = require('../models/career');

exports.getCareers = async(req, res) => {
    try {
        const careers = await Career.findAll();
        res.render('index', {
            careers,
            search: false,
            editing: false
        });
    } catch (err) {
        res.status(500).json({ error: 'Something went wrong' });
    }
};
const formatDate = (date) => {
    if (!date) return '';
    const dt = date.split('-');
    if (dt.length !== 3) return date;
    return `${dt[2]}-${dt[1]}-${dt[0]}`;
};
exports.search=async(req, res)=>{
    console.log(req.body.name);
    try{
        const name = req.body.name || req.query.name;
        const cricketer=await Career.findOne({where: {name}});
        if (cricketer) {
            cricketer.m_dob = formatDate(cricketer.dob);
        }
        res.render('index',{
            career: cricketer,
            search: true,
            editing: false
        })
    } catch(err){
        res.status(500).json({ error: "searching not working"});
    }
}
exports.createCareer = async(req, res) => {
    try {
        const { name, dob, url, birth_place, career_path, no_matches, score, fifties, centuries, wickets, average } = req.body;
        await Career.create({ name, dob, url, birth_place, career_path, no_matches, score, fifties, centuries, wickets, average });
        res.redirect('/');
    } catch (err) {
        res.status(500).json({ error: 'Something went wrong' });
    }
};

exports.getEditcareer = async(req, res) => {
    try {
        const edit = req.query.edit;
        if (!edit) return res.redirect('/');
        const careerId = req.params.id;

        const career = await Career.findByPk(careerId);
        res.render('index', {
            editing: edit,
            search: true,
            career: career
        })
    } catch (err) {
        res.status(500).json({ error: 'getcareer not working' });
    }

}
exports.postEditcareer = async(req, res) => {
    try {
        const { careerId, name, dob, url, birth_place, career_path, no_matches, score, fifties, centuries, wickets, average  } = req.body;
        await Career.update({ name, dob ,url, birth_place, career_path, no_matches, score, fifties, centuries, wickets, average }, { where: { id: careerId } });
        res.redirect(`/search?name=${name}`);
    } catch (err) {
        res.status(500).json({ error: 'Something went wrong' });
    }
};