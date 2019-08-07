module.exports = {
  getData: function(req, res){
    const userExpenses = req.app.get("db").getExpenses(req.session.user.username);
    console.log(req.session.user.username)
    console.log(userExpenses)
    return res.status(200).send(userExpenses)
  },
  addPurchase: async function(req, res) {
    const { date, description, category, price } = req.body;
    console.log(req.body)
    // const {id} = req.params

    const userExpense = await req.app
      .get("db")
      .addExpense([date, description, category, price, req.session.user.username]);
      console.log(userExpense)
    return res.status(200).send(userExpense);
  },

  deletePurchase: async function(req, res) {
    const {id} = req.params;

     const removeExpense = await req.app.get("db").removeExpense([]).filter(expense => expense.id !== parseInt(id));
     return res.status(200).send(removeExpense)
    

  }
};
