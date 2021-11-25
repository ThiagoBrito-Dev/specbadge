module.exports = {
  show(req, res) {
    return res.render("not-found", {
      title: "Página não encontrada",
      message:
        "Sentimos muito, mas não foi possível encontrar a página solicitada!",
    });
  },
};
