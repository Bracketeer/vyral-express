module.exports = function(options) {
  // options.fn(this) = Handelbars content between {{#bold}} HERE {{/bold}}
  var button = '<center><button>' + options.fn(this) + '</button></center>';
  return button;
}
