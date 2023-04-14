import { v4 as generateId } from 'uuid';
import { ddbDocClient } from "./ddb-doc-client";
import { PutCommand } from '@aws-sdk/lib-dynamodb';

export const createProduct = async (event) => {
  const ProductsTableName = process.env.TABLE_NAME_PRODUCTS;
  const ProductsStockTableName = process.env.TABLE_NAME_PRODUCTS_STOCK;

  try {
    console.log(`createProduct: ${ JSON.stringify(event.body) }`);
    const { body } = event;
    const { count, ...product } = body;
    const productId = generateId();

    const isValid = validateProduct(event.body);
    if (!isValid) {
        return {
            statusCode: 400,
            body: 'Product data is invalid'
        }
    }

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
    console.error(`createProduct, error: ${error}`);
    return {
      statusCode: 500,
      body: error ?? { message: 'Product was not created' }
    }
  }
};

function validateProduct (product) {
    if (!product.price || !product.count || !product.title || !product.description) {
        return false;
    }

    if (typeof product.price !== 'number' || typeof product.count !== 'number') {
        return false;
    }

    if (typeof product.title !== 'string' || typeof product.description !== 'string') {
        return false;
    }

    return true;
}