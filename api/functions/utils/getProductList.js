const { postToShopify } = require("./postToShopify");

exports.getProductList = async () => {
  try {
    const shopifyResponse = await postToShopify({
      query: `
        query getProductList {
          products(first: 5) {
            edges {
              node {
                id
                handle
                description
                title
                totalInventory
                variants(first: 5) {
                    edges {
                        node {
                            id
                            title
                    }
                  }
                }
              }
            }
            pageInfo {
              hasNextPage
            }
          }
        }
      `,
    });

    return shopifyResponse.products.edges;
  } catch (error) {
    console.log(error);
  }
};
