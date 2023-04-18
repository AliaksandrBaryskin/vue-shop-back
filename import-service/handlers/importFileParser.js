import AWS from 'aws-sdk';
import csvParser from 'csv-parser';

export const importFileParser = async (event) => {
    const s3 = new AWS.S3({ region: 'us-east-1' });

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
                    .on('data', (data) => {
                        console.log(record.s3.object.key, ': ', data);
                    })
                    .on('error', (err) => reject(err))
                    .on('end', async () => {
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
