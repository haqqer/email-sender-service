const onDelivered = (req, res) => {
  console.log('----------- ini webhook delivered --------------\n\n', req.body)
  res.send('ok')
}

module.exports = {
  onDelivered
}
