export const api = {
  async getProductData(page: number, category: string | null) {
    const response = await fetch(
      `https://api.appworks-school.tw/api/1.0/products/${
        category ?? 'all'
      }?paging=${page}`
    );
    return await response.json();
  },

  async searchProduct(keyword: string, page: number) {
    const response = await fetch(
      `https://api.appworks-school.tw/api/1.0/products/search?keyword=${keyword}&paging=${page}`
    );
    return response.json();
  },

  async getBanners() {
    const response = await fetch(
      'https://api.appworks-school.tw/api/1.0/marketing/campaigns'
    );
    return response.json();
  },

  async getProductInfo(id: string) {
    const response = await fetch(
      `https://api.appworks-school.tw/api/1.0/products/details?id=${id}}`
    );
    return response.json();
  },

  async signIn(email: string, password: string) {
    const response = await fetch(
      'https://api.appworks-school.tw/api/1.0/user/signin',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          provider: 'native',
          email,
          password,
        }),
      }
    );
    return response.json();
  },
};
