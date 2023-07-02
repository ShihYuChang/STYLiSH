export const api = {
  async getProductData(page: number, category: string | null) {
    const response = await fetch(
      `https://api.appworks-school.tw/api/1.0/products/${
        category ?? 'all'
      }?paging=${page}`
    );
    return await response.json();
  },
};
