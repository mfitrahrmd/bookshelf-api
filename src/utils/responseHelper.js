function SuccessResponse({ message, data }) {
  this.status = 'success';
  this.message = message;
  this.data = data;
}

function FailResponse({ message }) {
  this.status = 'fail';
  this.message = message;
}

module.exports = {
  SuccessResponse,
  FailResponse,
};
