import { createContext, useContext } from "react";

// creating a context
export const RestaurantContext = createContext();

// creating a provider
export const useRestaurantContext = () => useContext(RestaurantContext);