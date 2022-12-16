
# Rocketship

School project simulating an e-commerce website using:
    

&nbsp;  
&nbsp;  

## Front-end

* ReactJS
* TailwindCSS
* Typescript

## Backend

* NodeJS
* ExpressJS
* Supabase

&nbsp;  
&nbsp;

## API Documentation

### Products
#### Get all products

```http
  GET /api/products
```

| Parameter   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `None` | `---` | --- |

#### Get product

```http
  POST /api/products/get/${id}
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Required**. The product ID you want to see. |

#### Add product

```http
  POST /api/products/add
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `product`      | `IProduct` | **Required**. The product object in request's body. |

#### Edit product

```http
  POST /api/products/edit/${id}
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Required**. The product ID you want to edit. |
| `product`      | `IProduct` | **Required**. The product object in request's body. |

#### Delete product

```http
  POST /api/products/delete/${id}
```

| Parameter   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Required**. The product ID you want to delete. |


