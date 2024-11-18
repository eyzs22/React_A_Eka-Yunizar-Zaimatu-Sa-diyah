import { useState, useEffect } from 'react';
import getAllProducts from '../../services/getAllProducts';
import CardList from '../../components/CardList/CardList';
import Navbar from '../../components/Navbar/Navbar';
import RadioButton from '../../components/RadioButton/RadioButton';
import getAllProductCategories from '../../services/getAllProductCategories';

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('peralatan-memasak'); // Set default category
  const [searchTerm, setSearchTerm] = useState(''); // State untuk menyimpan input pencarian

  useEffect(() => {
    const allProducts = getAllProducts();
    setProducts(allProducts);
    setFilteredProducts(allProducts); // Set initial filtered products
    setCategories(getAllProductCategories()); // Set categories
  }, []);

  useEffect(() => {
    const filtered = products.filter(product => 
      (selectedCategory === 'all' || product.categorySlug === selectedCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) // Filter berdasarkan pencarian
    );
    setFilteredProducts(filtered);
  }, [selectedCategory, products, searchTerm]); // Tambahkan searchTerm ke dependencies

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value); // Update state pencarian
  };

  return (
    <>
      <Navbar onSearchChange={handleSearchChange} />
      <div className="px-24 py-4 gap-4 mt-4 flex-wrap">
        <h3 className="font-medium text-[#001f3f]">Filter Kategori</h3>
        <div className="flex gap-2 flex-wrap">
          <RadioButton
            options={[
              { label: 'All', value: 'all' },
              ...categories.map(category => ({
                label: category.name,
                value: category.slug,
              })),
            ]}
            defaultValue={selectedCategory}
            onChange={handleCategoryChange}
          />
        </div>
      </div>
      <section className="container px-24 py-4">
        <main className="grid grid-cols-4 gap-4">
          <CardList products={filteredProducts} />
        </main>
      </section>
    </>
  );
}
