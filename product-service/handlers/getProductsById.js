import productList from './productList.json';

export const getProductsById = async (event) => {
  try {
    const id = event.pathParameters.productId;
    const product = productList.find(product => product.id === id);
    if (!product) {
      throw new Error('Product was not found');
    }
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Headers': '*'
      },
      body: JSON.stringify(product),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: error ?? { message: 'Request for product id is invalid' }
    }
  }
};

