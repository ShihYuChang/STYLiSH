export const api = {
  async getProductData(page: number, category: string | null) {
    const response = await fetch(
      `https://api.appworks-school.tw/api/1.0/products/${
        category ?? 'all'
      }?paging=${page}`
    );
    return await response.json();
  },

  async searchProduct(page: number) {
    const response = await fetch(
      `https://api.appworks-school.tw/api/1.0/products/search?keyword=洋裝&paging=${page}`
    );
    return response.json();
  },
};
