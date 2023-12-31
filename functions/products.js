const dotenv = require('dotenv');
dotenv.config();

const Airtable = require('airtable-node');

const airtable = new Airtable({
  apiKey: process.env.VITE_AIRTABLE_API_KEY,
})
  .base(process.env.VITE_AIRTABLE_BASE_ID)
  .table(process.env.VITE_AIRTABLE_TABLE_NAME);

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
