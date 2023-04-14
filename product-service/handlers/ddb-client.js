import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

const ddbClient = new DynamoDBClient({
    apiVersion: "latest",
    credentials: {
        accessKeyId: "ASIATHMZAGEGJMDRY7WF",
        secretAccessKey: "b3MeM3Bcc97CZbd0f77KRenDHoJtIaxstJV1DYF5",
        sessionToken: "IQoJb3JpZ2luX2VjEEkaCXVzLWVhc3QtMSJIMEYCIQDRtks2VT5ZA4BcEBJYCw0NPaiekH/iTuBtieVigfVw/QIhANem6Vp28k1z4Omm58aBPd0SjmTi5ulbCqGzZBnnQybNKpcDCEIQABoMMjIyMDQ4NTYzNDY4IgyB58O3+IVl6G/BZqMq9AIFvyPjPH4nI56e2dV8DxGhnLOGu6jomo1zAzn3dfFhllE7DN2QWl8c53/tAHlTef9fT3pl1OuXfFqt82zs7lhulcIYsaSv/MvgLWOEg0GfK4lONT2Bt97J4K2MUvBQPQ8eHxFc3Fn+TzLM22DxeHxa9TLbQy4SjJVBV5Jfyiu7/PJl7FOz4IBATgF4NgwVzuC+yHDl1ZABWac1TAWvAAJZiNOBCGfURng2qJ0rUIDbqTHkWOa6uXiw14DEEgQnVT7RbCVsG9RfiGXeCdFFvkknuscxZqoRFUVASyPW5KtxD7ybEQT5ybZedRbR+PzMNOFbAF3yYNyJXosJNqgBaJNmdGgE3mYRnKZ528dZEdyfQpFIs/gTUCdkkUAbQCLPZFNSc6YaiEHk8ox62UGoCqrvKUC6aiKbrJ8+rMFBHnH8cbJ1qw5xbh957Deg80EZLIy6qi/SkpSMTnB98bPIXzUfA5Je3ABZsPbg6NWnzDc3En0SM9kw6YX0oQY6pQGEwx4GEDBco370WnCvOA3jHy1DBz6l8rX2ItpVPP4+yx8dInp4Ef3wukNdBnJlPG6i3ku6u37TgJ2fN3iFVG+eV2rc3r/j9a+/ql0aj54NABUIyvu0fT2OLO80a3975J5iZxNS3QH7BCW3A84o7D2/VUytDEYvQ7GsUiNEIu3wT23dj3UrIfoaX6NJIUMt1Z3dykibdYYxjzxbRzKb5qp4n4LtO9A="
    },
    region: "us-east-1"
});
export { ddbClient };

