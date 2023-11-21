const Airtable = require('airtable-node');

export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  stock: number;
  description: string;
  colors: string;
  price: string;
  featured: string;
  image: object;
  screen_size: string;
  cpu: string;
  display: string;
  memory: string;
  os: string;
  font_camera: string;
  back_camera: string;
  battety: string;
  weight: string;
  warranty: string;
};

type ProductDestructed = Omit<Product, 'image'> & { images: Array<object> };

const airtable = new Airtable({
  apiKey:
    'pat17kVlBjoo5Yu4F.8865876a8f45845581902e7acf2a02aaf71670cc70ddc1d5b96e0735adeef2eb',
})
  .base('appaHFfiPfsEBkn82')
  .table('products');

exports.handler = async function (event, context) {
  try {
    const response = await airtable.list({ maxRecords: 200 });
    const products: Product[] = response?.records.map(
      (product: { id: string; fields: ProductDestructed }): Product => {
        const { id, fields } = product;
        const {
          name,
          brand,
          category,
          stock,
          description,
          colors,
          price,
          featured,
          images: [image],
          screen_size,
          cpu,
          display,
          memory,
          os,
          font_camera,
          back_camera,
          battety,
          weight,
          warranty,
        } = fields;

        return {
          id,
          name,
          brand,
          category,
          stock,
          description,
          colors,
          price,
          featured,
          image,
          screen_size,
          cpu,
          display,
          memory,
          os,
          font_camera,
          back_camera,
          battety,
          weight,
          warranty,
        };
      }
    );

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
