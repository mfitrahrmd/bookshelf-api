function failActionHandler(req, h, err) {
  if (err.isJoi) {
    return h
      .response({ status: 'fail', message: err.details[0].message })
      .code(400)
      .takeover();
  }

  return h
    .response({ status: 'error', message: 'Buku gagal ditambahkan' })
    .status(500)
    .takeover();
}

module.exports = failActionHandler;
