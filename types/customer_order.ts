type CustomerOrder = {
    orderId: string,
    customerId: string,
    createdAt: string,
    price: number,
    products: ProductInCustomerOrder[],
}