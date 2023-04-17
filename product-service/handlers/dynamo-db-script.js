const AWS = require('aws-sdk');
const shopProducts = require('./aws-shop-products.json').AWS_Shop_Products;
const shopProductsStock = require('./aws-shop-products-stock.json').AWS_Shop_Products_Stock;

AWS.config.update({
    apiVersion: "latest",
    credentials: {
        accessKeyId: "ASIATHMZAGEGEYVQ54EB",
        secretAccessKey: "sLIEiKg4DnyC2qZvw/dMRI1R9cNWwLigv58HIhfw",
        sessionToken: "IQoJb3JpZ2luX2VjEO7//////////wEaCXVzLWVhc3QtMSJHMEUCIDkSsHeJYlB3h8Mf3+e7omQOdwZmPDjjphR4+UQkBJr+AiEAhCftaRhZTFQZqlZZHxFu3JaR5CgfpdKLSDS+t+GsH+kqoAMI1///////////ARAAGgwyMjIwNDg1NjM0NjgiDOaGQ6XwduBIoZc6mCr0AjHINQ63f8fUSSK+4nJhRRUdRzV34RHCP2lvUK3QygX0S+eCuheGM8omak1XMx1QOWZ/glQOHp7xucWQmwjwOikYRpHnYtfcWH7d1CwQ5i8hmXi1mZx5i4fqaznBqJ2IUMjnbmcirViaT3thcIStd16irgQ0p98axUmGhEUTs2evPq9mrJYnkVx3MBNjvuhCr9Q1MAsxo/xebOKKi+W2BfmbGtGttxWcsyu2xiYp5lFUyH158F95B/elOiCdPawxf9JGKNwUJr6n4c9k649xNWvHqD7ujWsx/h48YLS5U1UQva/zWETsatZdyC8G7G6xKfLhANZkLSWLWJdq06coH/B6ZyKCoNE9R0tIUGR+Zy07PkCrtWBT/0PgAP4SoKkANqkr+jNx7tlfqScHggBboDtrAxSg6fcrzfOaRAIgJvgAdTOTipp0NYxugVj5LKCLNON1R4/FFPiVEXcOFcYxtowUdq/9r3hqA8J0SW6EBibRjmphDjC2iOChBjqmAebmNbR8VgzAIWSLMgaUoeR/1Xpu5x1eLmU//36XetEh1CqRY5xM2p57SsscOQoQ8IV+fLHC9E4BU9Hp8Y0GIqP8hOq1ur+9QW0Ct/Bdf26FqlSJSKCbBkvr817G8NqLNbD3uysvqDyARYDv4HgdKwqSwJrXiiwGeaRHIzZ7/kyt97REMDEQ1YdF91g4RspqMmuH2tFWreltUxxPvxD9Wa96TmRqepg="
    },
    region: "us-east-1"
});

const ddb = new AWS.DynamoDB({});
const myTable = 'AWS_Products';
// const myTable2 = 'AWS_Products_Stock';

createTable(myTable, shopProducts);
// createTable(myTable2, shopProductsStock);

function createTable(tableName, tableItems) {
    tableItems.forEach(item => {
        const params = {
            TableName: tableName,
            Item: item.PutRequest.Item
        };
        ddb.putItem(params, function(err, data) {
            if (err) {
                console.log("Error", err);
            } else {
                console.log("Success", data);
            }
        });
    });
}