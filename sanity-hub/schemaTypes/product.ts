export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Product Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Product Description',
      type: 'text',
    },
    {
        name: 'images',
        title: 'Product Images',
        type: 'array',
        of: [{type: 'image'}],
    },
    {
        name: 'slug',
        title: 'Product Slug',
        type: 'slug',
        options: {
            source: 'title',
        },
    },
    {
        name: 'price',
        title: 'Product Price',
        type: 'number',
    },
    {
      name: 'id',
      title: 'Product Price ID',
      type: 'string',
    },
    {
        name: 'category',
        title: 'Product Category',
        type: 'reference',
        to: [{type: 'category'}],
    },
  ],
}