function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable; // true / false
}

// Câu 2: Mảng products (>= 6 sp, >= 2 danh mục)
const products = [
  new Product("P001", "Laptop Pro 14", 42000000, 5, "Computers", true),
  new Product("P002", "Laptop Air 13", 28000000, 0, "Computers", true),
  new Product("P003", "Mechanical Keyboard", 2500000, 12, "Accessories", true),
  new Product("P004", "Wireless Mouse", 900000, 30, "Accessories", true),
  new Product("P005", "USB-C Hub 8-in-1", 1200000, 0, "Accessories", false),
  new Product("P006", "27-inch Monitor", 7500000, 7, "Displays", true),
];

// Câu 3: Mảng mới chỉ chứa name, price
const namePriceList = products.map(function (p) {
  return { name: p.name, price: p.price };
});

// Câu 4: Lọc sản phẩm còn hàng (quantity > 0)
const inStockProducts = products.filter(function (p) {
  return p.quantity > 0;
});

// Câu 5: Có ít nhất 1 sản phẩm giá > 30.000.000?
const hasOver30M = products.some(function (p) {
  return p.price > 30000000;
});

// Câu 6: Tất cả sản phẩm thuộc "Accessories" có isAvailable = true?
const accessories = products.filter(function (p) {
  return p.category === "Accessories";
});
const allAccessoriesAvailable = accessories.every(function (p) {
  return p.isAvailable === true;
});

// Câu 7: Tổng giá trị kho = sum(price * quantity)
const totalInventoryValue = products.reduce(function (sum, p) {
  return sum + p.price * p.quantity;
}, 0);

// Câu 8: for...of in ra Tên sản phẩm, Danh mục, Trạng thái
function printWithForOf(list) {
  for (const p of list) {
    const status = p.isAvailable ? "Đang bán" : "Ngừng bán";
    console.log(`- ${p.name} | ${p.category} | ${status}`);
  }
}

// Câu 9: for...in in ra tên thuộc tính và giá trị tương ứng (trên 1 sản phẩm)
function printPropsWithForIn(product) {
  for (const key in product) {
    if (Object.prototype.hasOwnProperty.call(product, key)) {
      console.log(`${key}: ${product[key]}`);
    }
  }
}

// Câu 10: Danh sách tên sản phẩm đang bán và còn hàng
const sellingAndInStockNames = products
  .filter(function (p) {
    return p.isAvailable === true && p.quantity > 0;
  })
  .map(function (p) {
    return p.name;
  });

// Demo output
console.log("\nCâu 3 - name, price:");
console.log(namePriceList);

console.log("\nCâu 4 - còn hàng (quantity > 0):");
console.log(inStockProducts);

console.log("\nCâu 5 - có sản phẩm > 30.000.000?");
console.log(hasOver30M);

console.log('\nCâu 6 - tất cả "Accessories" đang được bán?');
console.log(allAccessoriesAvailable);

console.log("\nCâu 7 - tổng giá trị kho:");
console.log(totalInventoryValue);

console.log("\nCâu 8 - for...of:");
printWithForOf(products);

console.log("\nCâu 9 - for...in (sản phẩm đầu tiên):");
printPropsWithForIn(products[0]);

console.log("\nCâu 10 - tên sản phẩm đang bán & còn hàng:");
console.log(sellingAndInStockNames);

