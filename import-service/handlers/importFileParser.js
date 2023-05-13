import AWS from 'aws-sdk';
import csvParser from 'csv-parser';

export const importFileParser = async (event) => {
    const s3 = new AWS.S3({ region: 'us-east-1' });
    const sqs = new AWS.SQS();

    for (const record of event.Records) {
        const params = {
            Bucket: 'vue-shop-import-bucket',
            Key: record.s3.object.key,
        };

        const fileStream = s3.getObject(params).createReadStream();

        const parse = async (stream) => {
            return new Promise((resolve, reject) => {
                stream
                    .pipe(csvParser())
                    .on('data', async (data) => {
                        const message = { availableProduct: data };

                        await sqs.sendMessage({
                            QueueUrl: 'https://sqs.us-east-1.amazonaws.com/222048563468/catalogItemsQueue',
                            MessageBody: JSON.stringify(message)
                        }).promise();
                    })
                    .on('error', (err) => reject(err))
                    .on('end', async () => {
                        console.log(`importFileParser: all messages were sent`);

                        await s3.copyObject({
                            CopySource: params.Bucket + '/' + params.Key,
                            Bucket: params.Bucket,
                            Key: params.Key.replace('uploaded', 'parsed'),
                        }).promise();
                      
                        await s3.deleteObject(params).promise();
                        resolve();
                    });
            });
        };

        await parse(fileStream);
    } 
};
