import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { uiActions } from './store/ui-slice';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    const sendCartData = async() => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'pending',
        message: 'Sending data to cart....'
      }))

      const response = await fetch('https://practice-2cc8c-default-rtdb.firebaseio.com/cart',{
                        method: 'PUT',
                        body: JSON.stringify(cart)
                      });

      if(!response.ok)
      {
        throw new Error('Sending cart data failed');
      }

      //const responseData = await response.json();
      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'success',
        message: 'Data sent to cart successfully!'
      }))
    }
    if(isInitial)
    {
      isInitial = false;
      return;
    }
    sendCartData().catch(e => dispatch(uiActions.showNotification(
        {
          status: 'error',
          title: 'error',
          message: "Error while sending data"
        }
      ))
    )
  }, [cart, dispatch])
  return (
    <Fragment>
      {notification && <Notification 
                  status={notification.status} 
                  title={notification.title} 
                  message={notification.message}/>}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
