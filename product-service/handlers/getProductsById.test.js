import getProductsById from './getProductsById';

describe('get product by id', () => {
    it('success', async () => {
      console.log(getProductsById);
      const result = await getProductsById({
        pathParameters: {
          productId: '7567ec4b-b10c-48c5-9345-fc73c48a80aa'
        }
      });
      expect(result.body).toEqual(JSON.stringify({
        "count": 4,
        "description": "",
        "id": "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
        "price": 2.4,
        "title": "My Hero Academia"
      }));
    });

    it('fail', async () => {
      const result = await getProductsById({
        pathParameters: {
          productId: 'abcd'
        }
      });
      expect(result.body.message).toEqual('Product was not found');
    });
});

