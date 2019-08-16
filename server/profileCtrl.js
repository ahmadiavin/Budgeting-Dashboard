module.exports = {
  profile: async function(req, res) {
    const profileData = await req.app
      .get("db")
      .getProfile(req.session.user.username);
    return res.status(200).send(profileData[0]);
  },
  profileEdit: async function(req, res) {
    const { username } = req.params;
    const { first_name, last_name, age } = req.body;

    const profileEdit = await req.app
      .get("db")
      .editProfile([first_name, last_name, age, username]);
    return res.status(200).send(profileEdit);
  }
};
