import { createContext, useContext } from "react";
import { initial } from "../reducers/shopReducer";
const ShopContext = createContext(initial);
