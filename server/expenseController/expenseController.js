module.exports = {
  addPurchase: async function(req, res) {
    const { date, description, category, price } = req.body;
    // const {id} = req.params

    const userExpense = await req.app
      .get("db")
      .addExpense(date, description, category, price);
    return res.status(200).send(userExpense);
  }
};
