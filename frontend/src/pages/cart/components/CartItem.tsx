import styled from 'styled-components';

import { PizzaCartItem } from '@/types/PizzaCartItem';
import Flex from '@/components/ui/Flex';
import Title from '@/components/ui/Title';

import CartItemCounter from './CartItemCounter';

import { formatNumber } from '@/utils/formatNumber';

export interface CartItemProps {
  pizzaCartItem: PizzaCartItem;
  addItemToCart: (pizzaCartItem: PizzaCartItem) => void;
  removeItemFromCart: (pizzaId: string) => void;
}

const CartItem = ({ pizzaCartItem, addItemToCart, removeItemFromCart }: CartItemProps) => {
  return (
    <Wrapper>
      <img className='cart-item-img' src={pizzaCartItem.img} alt={pizzaCartItem.name} />
      <div className='text-container'>
        <CartItemTitle>Pizza {pizzaCartItem.name}</CartItemTitle>
        <p className='price'>${formatNumber(pizzaCartItem.price)}</p>
      </div>
      <CartItemCounter
        pizzaCartItem={pizzaCartItem}
        addItemToCart={addItemToCart}
        removeItemFromCart={removeItemFromCart}
      />
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
