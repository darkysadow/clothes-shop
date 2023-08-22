const domain = process.env.DOMAIN;
const accessToken = process.env.STOREFRONT_API_ACCESS_TOKEN;

async function ShopifyData(query) {
    const URL = `https://${domain}/api/2023-07/graphql.json`;
  
    const options = {
      endpoint: URL,
      method: "POST",
      headers: {
        "X-Shopify-Storefront-Access-Token": accessToken,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    };
  
    try {
      const data = await fetch(URL, options).then((response) => {
        return response.json();
      });
  
      return data;
    } catch (error) {
      throw new Error("Products not fetched", error);
    }
  }

  export async function getAllProductsInCollection(collection) {
    const query = `
    {
        collection(handle: "${collection}") {
          id
          title
          products(first: 25) {
            edges {
              node {
                id
                title
                description
                images(first:5) {
                    edges {
                      node {
                        url
                      }
                    }
                  }
              }
            }
          }
        }
      }`;
  
    const response = await ShopifyData(query);
    const allProducts = response.data.collection.products.edges
      ? response.data.collection.products.edges
      : [];

  
    return allProducts;
  }

  export async function getAllProducts() {
    const query = `
    {
        products(first: 25) {
          edges {
            node {
              id
              title
              availableForSale
              tags
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              images(first: 10) {
                edges {
                  node {
                    url
                    altText
                  }
                }
              }
             
              }
            }
          }
        }
    `
    const response = await ShopifyData(query);
    const allProducts = response.data.products.edges ? response.data.products.edges : []
    return allProducts; 
  }

  export async function get3dModuleUrlFromProduct(productId) {
    const query = `
    {
        product(id: ${productId}) {
          id
          media(first: 10) {
            edges {
              node {
                ...mediaFieldsByType
              }
            }
          }
        }
      }
      fragment mediaFieldsByType on Media {
        ... on Model3d {
          sources {
            url
            mimeType
            format
            filesize
          }
        }
      }
    `
  }