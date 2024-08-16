import styled from 'styled-components';
import Flex from '../ui/Flex';
import { PizzaCartItem } from '@/types/PizzaCartItem';
import Title from '../ui/Title';
import CartItemCounter from './CartItemCounter';
import { formatNumber } from '@/utils/formatNumber';

export interface CartItemProps extends PizzaCartItem {
  addItemToCart: (pizzaId: string) => void;
  removeItemFromCart: (pizzaId: string) => void;
}

const CartItem = ({ id, name, price, count, img, addItemToCart, removeItemFromCart }: CartItemProps) => {
  return (
    <Wrapper>
      <img className='cart-item-img' src={img} alt={name} />
      <div className='text-container'>
        <CartItemTitle>Pizza {name}</CartItemTitle>
        <p className='price'>${formatNumber(price)}</p>
      </div>
      <CartItemCounter count={count} id={id} addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart} />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  ${Flex}
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  gap: 20px;
  padding-bottom: 5px;

  .text-container {
    ${Flex}
    flex-direction: column;
    flex: 1;
    gap: 10px;
    align-items: flex-start;

    .price {
      font-weight: 500;
      color: ${({ theme }) => theme.deepBlue};
    }
  }

  .cart-item-img {
    height: 60px;
    width: 60px;
    border-radius: 100%;
    object-fit: cover;
    border: 2px solid ${({ theme }) => theme.vibrantOrange};
  }
`;

const CartItemTitle = styled(Title)`
  font-size: 18px;
  color: ${({ theme }) => theme.brightRed};
`;

export default CartItem;
