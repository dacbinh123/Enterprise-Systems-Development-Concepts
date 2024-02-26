const getIndexController = (req, res) => {
  res.render('index'); // Đảm bảo rằng bạn đã có file index.hbs trong thư mục views
};

module.exports = {
  getIndexController,
};
