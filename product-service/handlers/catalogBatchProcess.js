import AWS from 'aws-sdk';
import { v4 as generateId } from 'uuid';

export const catalogBatchProcess = async (event) => {
  console.log(`catalogBatchProcess: records - ${JSON.stringify(event.Records)}`);
  let products = [];

  event.Records.forEach(async (record) => {
    const body = JSON.parse(record.body);

    const product = {
        id: generateId(),
        title: body.title,
        description: body.description,
        price: body.price,
        count: body.count
    };

    console.log(`catalogBatchProcess: product ${JSON.stringify(product)} was created!`);
    products.push(product);
  });

  const sns = new AWS.SNS();

  products.map(async (product) => {
    await sns.publish({
      Subject: 'Product Creation',
      Message: `New product ${product.title} was created`,
      TopicArn: 'arn:aws:sns:us-east-1:222048563468:createProductTopic',
      MessageAttributes: {
        price: {
          DataType: 'Number',
          StringValue: product.price
        }
      }
    }).promise();
  })

  console.log(`catalogBatchProcess: Email was sent!`);
};