import AWS from 'aws-sdk';

export const importProductsFile = async (event) => {
    const s3 = new AWS.S3({ region: 'us-east-1' });
    const name = event.queryStringParameters?.name;
    if (!name) {
        return {
            statusCode: 400,
            message: 'Query param is missed'
        }
    }
    try {
        const uploadUrl = await s3.getSignedUrlPromise('putObject', {
            Bucket: 'vue-shop-import-bucket',
            Key: `uploaded/${name}`,
            ContentType: 'application/csv',
            Expires: 60,
        });
        return {
            statusCode: 200,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Credentials': true,
              'Access-Control-Allow-Headers': '*'
            },
            body: JSON.stringify(uploadUrl)
        };
    } catch (err) {
        return {
            statusCode: 500,
            message: 'Products import is failed'
        }
    }
};
