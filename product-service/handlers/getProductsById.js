import { ddbDocClient } from "./ddb-doc-client";
import { GetCommand } from '@aws-sdk/lib-dynamodb';

export const getProductsById = async (event) => {
  const ProductsTableName = process.env.TABLE_NAME_PRODUCTS;
  const ProductsStockTableName = process.env.TABLE_NAME_PRODUCTS_STOCK;

  try {
    const productId = event.pathParameters.productId;
    const product = (await ddbDocClient.send(
        new GetCommand({
            TableName: ProductsTableName,
            Key: {
                id: productId
            },
        })
    )).Item;

    const productStockCount = (await ddbDocClient.send(
        new GetCommand({
            TableName: ProductsStockTableName,
            Key: {
                product_id: productId
            },
        })
    )).Item.count;

    if (!product && !productStockCount) {
      throw new Error('Product was not found');
    }
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Headers': '*'
      },
      body: JSON.stringify({...product, count: productStockCount })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: error ?? { message: 'Request for product id is invalid' }
    }
  }
};

