import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
// Set the AWS Region.
const REGION = "us-east-1"; //e.g. "us-east-1"
// Create an Amazon DynamoDB service client object.
const ddbClient = new DynamoDBClient({
    apiVersion: "latest",
    credentials: {
        accessKeyId: "ASIATHMZAGEGJM4CYJJ5",
        secretAccessKey: "0b1ogK3ELxXPUz4Y2d7k5hFQqq3ZIK0uFce36uqb",
        sessionToken: "IQoJb3JpZ2luX2VjEAMaCXVzLWVhc3QtMSJHMEUCIQCkvX9D3/V7AdmyhmR3drCjR6PCPkOy+rUgKGdC5vB1zAIgdK9jc5/E1HJXdJfzXGJHzg5ydS3McUHk0o7V//QVOSgqoAMI7P//////////ARAAGgwyMjIwNDg1NjM0NjgiDGUjWD0mmKOOmlSD6Sr0AiRBr81jBg5xx9XKXilwcaPJygNHfUEnkmpeGZseTsiV7rggR8U6eyIERYWL551/GT2tnN9C4YUBkZOoXL5xr8Is2XIT0lyxNy8Do7jhVMZZC+KaD2kFe6v0vDS7fBReqgNAyVVXmZMaIFrM69bjwGFWBSL6Q3SQNO3cMSpdwn54JmVP2yiU0iTafCBqT4lcpbLtrzcOASk53JRB1qv8FwPpRox5bCdb9dq/J0xxulbdzqXFidfYRuewMKH1VtO+4fWm2IadrlR/bMqnqvTbOEEoIyQVYsOj6fZAKj2SEnMHKBJY7g7Va44fwuCAqtVmNR6r+SG7wiALECbMPCzrrgsyOrSjliKgYN5+oTNZYrcaPQxjJ4V1P0ZeGndw/FnV2M8eT/X9pCeBMuxu8OirBsgDQUBO/qmLiwxi23x3hEkZDszH94fzI5vz1sa9epTfdfa7c5i4Z8Gr/jRsEMm4/V550B6cXmXvtI1rdZvCuAXKVD5z6zCe2uShBjqmAR2XBj5DCq2t+PmlKTLrGRaERMDYiK407KctgC4j6P0tGXdkJ6LxPpPzO0PC1qV2qOoLoFE+7yeIj5U9Gkimv0lnvFo7RsELqLPWcGsq3+cb3fAJyYttmWwBYaimcDXwDIR4flSlMlPadjG15xRO+sh0GFDiYvkg3EhYVLy5OlK/io057ozNrkUTz0n2pc8rYiIDZSoO/EHKN178DrbgbmSHae6YpUo="
    },
    region: "us-east-1"
});
export { ddbClient };

