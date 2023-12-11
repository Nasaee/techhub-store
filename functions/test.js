// domain/.netlify/functions/test
const items = [
  { id: 1, name: 'john' },
  { id: 2, name: 'susan' },
];

exports.handler = async function () {
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
