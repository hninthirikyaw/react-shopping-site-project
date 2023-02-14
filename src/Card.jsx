import React from "react";
import "./App.css";
const Card = () => {
  const featuredProducts = [
    {
      id: 1,
      title: "iPhone 9",
      description:
        "An apple mobile which is nothing like apple updated latest version",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    },
    {
      id: 2,
      title: "iPhone X",
      description: "SIM-Free,A19211 6.5-inch Super HD display technology A12",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      ],
    },
    {
      id: 3,
      title: "Universe 9",
      description: "Samsung's new variant goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/4/1.jpg",
        "https://i.dummyjson.com/data/products/4/2.jpg",
        "https://i.dummyjson.com/data/products/4/3.jpg",
        "https://i.dummyjson.com/data/products/4/4.jpg",
        "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      ],
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "P30 was unveiled yesterday in Germany, now its way to the UK.",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/5/1.jpg",
        "https://i.dummyjson.com/data/products/5/2.jpg",
        "https://i.dummyjson.com/data/products/5/3.jpg",
      ],
    },
  ];

  const popularProducts = [
    {
      id: 6,
      title: "MacBook Pro",
      description:
        "MacBook Pro 2021 with mini-LED display may launch between September, November",
      price: 1749,
      discountPercentage: 11.02,
      rating: 4.57,
      stock: 83,
      brand: "Apple",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
      images: [
        "https://i.dummyjson.com/data/products/6/1.png",
        "https://i.dummyjson.com/data/products/6/2.jpg",
        "https://i.dummyjson.com/data/products/6/3.png",
        "https://i.dummyjson.com/data/products/6/4.jpg",
      ],
    },
    {
      id: 7,
      title: "Samsung Galaxy",
      description:
        "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      price: 1499,
      discountPercentage: 4.15,
      rating: 4.25,
      stock: 50,
      brand: "Samsung",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/7/1.jpg",
        "https://i.dummyjson.com/data/products/7/2.jpg",
        "https://i.dummyjson.com/data/products/7/3.jpg",
        "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
      ],
    },
    {
      id: 8,
      title: "Microsoft Surface",
      description:
        " Stand out on HD video calls backed Studio Mics. Capture ideas on thetouchscreen.",
      price: 1499,
      discountPercentage: 10.23,
      rating: 4.43,
      stock: 68,
      brand: "Microsoft Surface",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/8/1.jpg",
        "https://i.dummyjson.com/data/products/8/2.jpg",
        "https://i.dummyjson.com/data/products/8/3.jpg",
        "https://i.dummyjson.com/data/products/8/4.jpg",
        "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
      ],
    },
    {
      id: 9,
      title: "Infinix INBOOK",
      description:
        "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
      price: 1099,
      discountPercentage: 11.83,
      rating: 4.54,
      stock: 96,
      brand: "Infinix",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/9/1.jpg",
        "https://i.dummyjson.com/data/products/9/2.png",
        "https://i.dummyjson.com/data/products/9/3.png",
        "https://i.dummyjson.com/data/products/9/4.jpg",
        "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
      ],
    },
    {
      id: 10,
      title: "HP Pavilion 15",
      description:
        "HP Pavilion Gaming Laptop 10th Gen Core i5, 256GB SSD, GTX 1650, Windows 10",
      price: 1099,
      discountPercentage: 6.18,
      rating: 4.43,
      stock: 89,
      brand: "HP Pavilion",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
      images: [
        "https://i.dummyjson.com/data/products/10/1.jpg",
        "https://i.dummyjson.com/data/products/10/2.jpg",
        "https://i.dummyjson.com/data/products/10/3.jpg",
        "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
      ],
    },
  ];

  const dealProducts = [
    {
        id: 28,
        title: "3D  Art Lamp",
        description: "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
        price: 20,
        discountPercentage: 16.49,
        rating: 4.82,
        stock: 54,
        brand: "LED Lights",
        category: "home-decoration",
        thumbnail: "https://i.dummyjson.com/data/products/28/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/28/1.jpg",
          "https://i.dummyjson.com/data/products/28/2.jpg",
          "https://i.dummyjson.com/data/products/28/3.png",
          "https://i.dummyjson.com/data/products/28/4.jpg",
          "https://i.dummyjson.com/data/products/28/thumbnail.jpg"
        ]
      },
      {
        id: 27,
        title: "Fly Wooden Bird",
        description: "Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material, Laminated",
        price: 51,
        discountPercentage: 15.58,
        rating: 4.41,
        stock: 17,
        brand: "Flying Wooden",
        category: "home-decoration",
        thumbnail: "https://i.dummyjson.com/data/products/27/thumbnail.webp",
        images: [
          "https://i.dummyjson.com/data/products/27/1.jpg",
          "https://i.dummyjson.com/data/products/27/2.jpg",
          "https://i.dummyjson.com/data/products/27/3.jpg",
          "https://i.dummyjson.com/data/products/27/4.jpg",
          "https://i.dummyjson.com/data/products/27/thumbnail.webp"
        ]
      },
      {
        id: 30,
        title: "Key Holder",
        description: "Attractive DesignMetallic materialFour Key hooksReliable & DurablePremium",
        price: 30,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: "Golden",
        category: "home-decoration",
        thumbnail: "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/30/1.jpg",
          "https://i.dummyjson.com/data/products/30/2.jpg",
          "https://i.dummyjson.com/data/products/30/3.jpg",
          "https://i.dummyjson.com/data/products/30/thumbnail.jpg"]
      },
    {
      id: 14,
      title: "Non-Alcoholic",
      description:
        "Original Al Munakh® Our Impression of Climate | 6ml Non-Alcoholic Concentrated",
      price: 120,
      discountPercentage: 15.6,
      rating: 4.21,
      stock: 114,
      brand: "Al Munakh",
      category: "fragrances",
      thumbnail: "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/14/1.jpg",
        "https://i.dummyjson.com/data/products/14/2.jpg",
        "https://i.dummyjson.com/data/products/14/3.jpg",
        "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
      ],
    },
  ];

  return (
    <>
      <div className="bg-light">
        <div className="container pt-3 d-flex justify-content-between">
          <h5>Featured products</h5>
          <div>
            <i className="card-icon bi bi-arrow-90deg-left"></i>
            <i className="card-icon  bi bi-arrow-90deg-right"></i>
          </div>
        </div>
        <div className="container d-flex">
          {featuredProducts.map((product) => (
            <div className="card gap-1 me-2">
              <img className="card-img" src={product.thumbnail} alt="product" />
              <h5 className="card-tile">{product.title}</h5>
              <p className="card-description">{product.description}</p>
              <div className="d-flex">
                <span className="text-black-50">
                  <del>${product.price + 100}</del>
                </span>
                <h5 className="card-price ms-2">${product.price}</h5>
              </div>
            </div>
          ))}
        </div>

        <div className="container pt-3 d-flex justify-content-between">
          <h5>Popular products</h5>
          <div>
            <i className="card-icon bi bi-arrow-90deg-left"></i>
            <i className="card-icon  bi bi-arrow-90deg-right"></i>
          </div>
        </div>
        <div className="container d-flex mb-5">
          {popularProducts.map((product) => (
            <div className="card gap-1 me-2">
              <img className="card-img" src={product.thumbnail} alt="product" />
              <h5 className="card-tile">{product.title}</h5>
              <p className="card-description">{product.description}</p>
              <div className="d-flex">
                <span className="text-black-50">
                  <del>${product.price + 100}</del>
                </span>
                <h5 className="card-price ms-2">${product.price}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="deal-section d-flex">
        <div className="col-4 deal-text text-center">
            <h1>Deals of <br /> the Day</h1>
            <h3>08:30:29</h3>
        </div>
      <div className="col-8 d-flex deal-card container py-5">
        {dealProducts.map((product) => (
          <div className="card gap-1 me-2">
            <img className="card-img" src={product.thumbnail} alt="product" />
            <h6 className="card-tile">{product.title}</h6>
            <p className="card-description deal-description">{product.description}</p>
            <div className="d-flex">
              <h6 className="text-black-50">
                <del>${product.price + 20}</del>
              </h6>
              <h6 className="card-price ms-2">${product.price}</h6>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Card;
