import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import formatToIDRCurrency from '../../utils/formatToIDRCurrency';
import { Link } from 'react-router-dom';

export default function Card({ product }) {
  return (
    <Link
      to={`/products/${product.slug}` ?? ''}
      className="flex flex-col max-w-[370px] flex-wrap p-[16px] bg-gradient-to-b from-[#e8f0fe] to-[#ffffff] hover:ring-opacity-40 active:ring-5 active:ring-[#6247eb] hover:ring-4 active:ring-2 active:ring-opacity-90 rounded-[8px]" // Tambahkan kelas rounded
    >
      <div className="flex flex-col max-w-[370px] flex-wrap p-[16px]">
        <img
          src={product.imageUrl ?? ''}
          alt={product.name ?? 'No name'}
          className="block max-h-[300px] mb-4 object-cover rounded-t-[8px]" // Tambahkan rounded pada gambar jika diinginkan
        />
        <div className="flex flex-col gap-2">
          <h4 className="font-medium text-[20px] text-black">{product.name ?? 'No Name'}</h4>
          <span className="block font-medium text-[14px] text-gray-600">{product.category ?? 'Uncategorized'}</span>
          <span className="block font-medium text-[20px] text-black">{formatToIDRCurrency(product.price) ?? 'Not for sale'}</span>
          <div>
            {product.stock <= 0 ? (
              <p className="text-xl font-semibold text-center text-red-500">Out of Stock</p>
            ) : product.stock <= 25 && product.stock !== 0 ? (
              <>
                <p className="text-xl font-semibold text-center text-yellow-500">Almost Sold Out</p>
                <Button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 p-4 bg-[#001f3f] text-center hover:bg-[#003366] text-white active:bg-[#4956ab] rounded-[8px]"
                >
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="mb-0"
                  />
                  <span>Add to cart</span>
                </Button>
              </>
            ) : (
              <Button
                type="button"
                className="inline-flex items-center justify-center gap-2 p-4 bg-[#001f3f] text-center hover:bg-[#003366] text-white active:bg-[#4956ab] rounded-[8px]"
              >
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="mb-0"
                />
                <span>Add to cart</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

Card.propTypes = {
  product: PropTypes.object,
};
