import {createContext, useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'

export const Context = createContext();

const AppContext = ({children}) => {
  const [categories, setCategories] = useState();
  const [products, setproducts] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubtotal, setCartSubTotal] = useState(0)
  const location = useLocation()


  // useEffect(() => {
  //   let subTotal = 0;
  //   let cartCount = 0;

  //   cartItems.map(item => {
  //     subTotal += (item.attributes.price * item.attributes.quantity)
  //     cartItems.map(item => cartCount += item.attributes.quantity)

  //   })
  //   setCartSubTotal(subTotal)

  //   setCartCount(cartCount)

  // }, [cartItems])

  useEffect(() => {
  let subTotal = 0;
  let cartCount = 0;

  cartItems.forEach(item => {
    subTotal += item.attributes.price * item.attributes.quantity;
    cartCount += item.attributes.quantity;
  });

  setCartSubTotal(subTotal);
  setCartCount(cartCount);
}, [cartItems]);

  const handleAddToCart = (product, quantity) => {
    let items = [...cartItems];
    let index = items.findIndex(p => p.id == product.id)
    if (index !== -1) {
      items[index].attributes.quantity += quantity;
    } else {
      product.attributes.quantity = quantity;
      items = [...items, product]
    }
    setCartItems(items)
  }

  const handleRemoveFromCart = (product) => {
    let items = [...cartItems];
    items = items.filter(p => p.id !== product.id)
    setCartItems(items)
  }

  const handleCartProductQuantity = (type, product) => {
    let items = [...cartItems];
    let index = items.findIndex(p => p.id == product.id)
    if (type === 'inc') {
      items[index].attributes.quantity += 1
    } else if (type === 'dec') {
      if (items[index].attributes.quantity == 1) return
      items[index].attributes.quantity -= 1
    }
    setCartItems(items)
  }

  return (
  <Context.Provider value={{
    categories,
    setCategories,
    products,
    setproducts,
    cartItems,
    setCartItems,
    cartCount,
    setCartCount,
    cartSubtotal,
    setCartSubTotal,
    handleAddToCart,
    handleRemoveFromCart,
    handleCartProductQuantity
  }} >
    {children}
  </Context.Provider>
)}

export default AppContext;
