import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button/Button';
import formatToIDRCurrency from '../../utils/formatToIDRCurrency';
import getAllProducts from '../../services/getAllProducts';

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const allProducts = getAllProducts();
    const foundProduct = allProducts.find((prod) => prod.slug === slug);
    setProduct(foundProduct);
  }, [slug]);

  if (!product) {
    return (
      <>
        <Navbar />
        <h1 className="flex w-full h-full text-center items-center justify-center text-4xl text-pink-600">PRODUCT NOT FOUND.</h1>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex px-24 py-4 gap-[48px] items-center">
        <Link to="/">
          <FontAwesomeIcon
            icon={faArrowLeftLong}
            className="mb-0 text-[40px]"
          />
        </Link>
        <h4 className="text-[32px] font-medium text-[#001f3f]">{product.name ?? 'No Label'}</h4>
      </div>
      <div className="flex gap-[30px] px-24">
        <div className="flex flex-col gap-[20px]">
          <span className="text-[40px] font-medium text-[#001f3f]">{formatToIDRCurrency(product.price) ?? `Not For Sale`}</span>
          {product.stock > 0 ? (
            product.stock <= 25 ? (
              <span className="font-medium text-yellow-500">Available, almost out of stock</span>
            ) : (
              <span className="font-medium text-green-500">Available</span>
            )
          ) : (
            <span className="font-medium text-red-500">Out of stock</span>
          )}
          <span className="text-grey-800">{product.category ?? 'Uncategorized'}</span>
          {product.stock > 0 ? (
            <Button
              type="button"
              className="inline-flex items-center justify-center gap-2 p-4 bg-[#001f3f] text-white hover:bg-[#003366] active:bg-[#4956ab] rounded-md"
            >
              <FontAwesomeIcon
                icon={faCartShopping}
                className="mb-0"
              />
              <span>Add to cart</span>
            </Button>
          ) : (
            <Button
              type="button"
              className="inline-flex items-center justify-center gap-2 p-4 bg-gray-400 text-white cursor-not-allowed rounded-md"
              disabled
            >
              <FontAwesomeIcon
                icon={faCartShopping}
                className="mb-0"
              />
              <span>Out of Stock</span>
            </Button>
          )}
        </div>
        <div className="flex-1">
          <img src={product.imageUrl} alt={product.name} className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
      <div className="px-24 py-4">
        <h5 className="text-xl font-semibold text-[#001f3f]">Description</h5>
        <p className="text-gray-700">{product.description ?? 'No description available.'}</p>
      </div>
    </>
  );
}
