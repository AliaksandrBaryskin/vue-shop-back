import { ddbDocClient } from "./ddb-doc-client";
import { ScanCommand } from "@aws-sdk/lib-dynamodb";

export const getProductsList = async (event) => {
  const ProductsTableName = process.env.TABLE_NAME_PRODUCTS;
  const ProductsStockTableName = process.env.TABLE_NAME_PRODUCTS_STOCK;

  try {
    console.log('getProductsList');
    const products = await ddbDocClient.send(new ScanCommand({ TableName: ProductsTableName }));
    const stocks = await ddbDocClient.send(new ScanCommand({ TableName: ProductsStockTableName }));
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Headers': '*'
      },
      body: JSON.stringify(products.Items.map((product) => {
        return {...product, count: stocks.Items.find(stock => stock.product_id === product.id)?.count};
      }))
    };
  } catch (error) {
    console.error(`getProductsList, error: ${error}`);
    return {
      statusCode: 500,
      body: 'Products not found'
    }
  }
};
