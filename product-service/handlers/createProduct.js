import { v4 as generateId } from 'uuid';
import { ddbDocClient } from "./ddb-doc-client";
import { PutCommand } from '@aws-sdk/lib-dynamodb';

export const createProduct = async (event) => {
  const ProductsTableName = process.env.TABLE_NAME_PRODUCTS;
  const ProductsStockTableName = process.env.TABLE_NAME_PRODUCTS_STOCK;

  try {
    console.log(event.body);
    const { body } = event;
    const { count, ...product} = body;
    const productId = generateId();

    await ddbDocClient.send(new PutCommand({
      TableName: ProductsTableName,
      Item: { id: productId, ...product },
    }));

    await ddbDocClient.send(new PutCommand({
      TableName: ProductsStockTableName,
      Item: { product_id: productId, count },
    }));

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Headers': '*'
      },
      body: JSON.stringify(productId)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: error ?? { message: 'Request for product id is invalid' }
    }
  }
};
