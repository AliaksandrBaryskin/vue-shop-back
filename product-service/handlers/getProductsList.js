import productList from './productList.json';

export const getProductsList = async (event) => {
  try {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Headers': '*'
      },
      body: JSON.stringify(productList),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Products not found'
    }
  }
};
