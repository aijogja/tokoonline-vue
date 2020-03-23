const products = [
  {
    "id": 1,
    "nama": "LED TV",
    "merk": "Sony",
    "gambar": null,
    "harga": "3000000.00",
    "qty": 10,
    "kategori": 1
  },
  {
    "id": 2,
    "nama": "Kipas Angin",
    "merk": "Miyako",
    "gambar": null,
    "harga": "300000.00",
    "qty": 100,
    "kategori": 1
  }
]

export default {
  getProducts (callback) {
    setTimeout(() => callback(products), 100)
  },
}
