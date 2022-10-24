import "./style/App.css";
import { useEffect, useState } from "react";

import Topbar from "./componnents/Topbar";
import Navbar from "./componnents/Navbar";
import Head from "./componnents/Head";
import Shop from "./componnents/Shop";
import Feature from "./componnents/Feature";
import Footer from "./componnents/Footer";

function App() {
  const THREE_DAYS_IN_MS = 60 * 1000;
  const CURRENT_DATE_IN_MS = new Date().getTime();
  const dateAfterThreeDays = CURRENT_DATE_IN_MS + THREE_DAYS_IN_MS;

  const categories = [
    {
      label: "All",
      status: true,
    },
    {
      label: "women",
      status: false,
    },
    {
      label: "men",
      status: false,
    },
    {
      label: "children",
      status: false,
    },
  ];
  const [selectedCategory, setSelectedCAtegory] = useState(categories[0]);
  const [listCat, setListCat] = useState(categories);

  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    const chosenProd = cartItems.filter((item) => item._id === product._id)[0];
    if (!chosenProd) {
      product["quantity"] = 1;
      setCartItems([...cartItems, product]);
    } else {
      const newCartItems = cartItems.map((itm) => {
        if (itm._id === product._id) {
          return { ...itm, quantity: (itm.quantity += 1) };
        }
        return itm;
      });
      setCartItems(newCartItems);
    }
  };

  const incrementQuantity = (product) => {
    const newc = cartItems.map((item) => {
      if (item._id === product._id) {
        return { ...item, quantity: (item.quantity += 1) };
      }
      return item;
    });
    setCartItems(newc);
  };

  const decrementQuantity = (product) => {
    let newc = cartItems.map((item) => {
      if (item._id === product._id) {
        return { ...item, quantity: (item.quantity -= 1) };
      }
      return item;
    });
    if (product.quantity === 0) {
      newc = cartItems.filter((item) => item._id !== product._id);
      setCartItems(newc);
    }
    setCartItems(newc);
  };

  return (
    <div>
      <Topbar />
      <Navbar />
      <Head />
      <Shop
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCAtegory}
        listCat={listCat}
        setListCat={setListCat}
      />
      <Feature targetDate={dateAfterThreeDays} />
      <Footer />
    </div>
  );
}

export default App;
