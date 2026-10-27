async function displayProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
    const products = await response.json();
    for (const product of products) {
      console.log(`Product: ${product.title}\nPrice: $${Number(product.price).toFixed(2)}\nImage: ${product.image}`);
    }
  } catch (error) {
    console.error("Failed to load products. Please try again.", error);
  }
}

displayProducts();
