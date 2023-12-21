const Airtable = require('airtable-node');

const airtable = new Airtable({
  apiKey:
    'pat17kVlBjoo5Yu4F.8865876a8f45845581902e7acf2a02aaf71670cc70ddc1d5b96e0735adeef2eb',
})
  .base('appaHFfiPfsEBkn82')
  .table('products');

exports.handler = async function () {
  try {
    const response = await airtable.list({ maxRecords: 200 });
    const products = response?.records.map((product) => {
      const { id, fields } = product;

      return { id, ...fields };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: 'There was an error',
    };
  }
};
