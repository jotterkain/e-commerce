const EventNames = {
    userCreated: "user.create",
    userActivated: 'user.active',

    orderCreated: "order.create",
    orderUpdated: "order.update",

    productCreated: "product.create",
    productUpdated: 'product.update',
    productDeleted: 'product.delete',
} as const;

export default EventNames;
