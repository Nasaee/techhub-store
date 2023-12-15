const Airtable = require('airtable-node');
const airtable = new Airtable({
  apiKey:
    'pat17kVlBjoo5Yu4F.8865876a8f45845581902e7acf2a02aaf71670cc70ddc1d5b96e0735adeef2eb',
})
  .base('appaHFfiPfsEBkn82')
  .table('products');
exports.handler = async function (event) {
  const { id } = event.queryStringParameters;
  try {
    let product = await airtable.retrieve(id);
    if (product.error) {
      return {
        statusCode: 404,
        body: `No product with id: ${id}`,
      };
    }
    product = { id: product.id, ...product.fields };
    return { statusCode: 200, body: JSON.stringify(product) };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: 'Server Error',
    };
  }
};
