module.exports = {
  getData: async function(req, res) {
    const userExpenses = await req.app
      .get("db")
      .getExpenses(req.session.user.username);
    return res.status(200).send(userExpenses);
  },
  addPurchase: async function(req, res) {
    const { date, description, category, price } = req.body;

    const userExpense = await req.app
      .get("db")
      .addExpense([
        date,
        description,
        category,
        price,
        req.session.user.username
      ]);

    return res.status(200).send(userExpense);
  },

  deletePurchase: async function(req, res) {
    const { id } = req.params;

    const removeExpense = await req.app
      .get("db")
      .removeExpense([id, req.session.user.username]);
    return res.status(200).send(removeExpense);
  },

  edit: async function(req, res) {
    const { id } = req.params;
    const { budget } = req.body;

    const editBudget = await req.app.get("db").changeBudget([budget, id]);
    return res.status(200).send(editBudget);
  }
};
