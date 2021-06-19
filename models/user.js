const sql = require("./db.js");

const User = (user) => {
    this.id = user.id;
    this.steamhex = user.steamhex;
    this.steamname = user.steamname;
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.rank = user.rank;
    this.status = user.status;
    this.timezone = user.timezone;
};

User.getAll = result => {
    sql.query('SELECT * FROM users', (err, res) => {
        if (err) {
            result(null, err);
            return;
        }

        result(null, res);
    });
}

module.exports = User;