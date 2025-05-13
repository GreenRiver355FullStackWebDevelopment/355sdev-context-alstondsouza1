import { createContext, useContext } from "react";

// creating a context
export const RestaurantContext = createContext();

// creating a provider
export const useRestaurants = () => useContext(RestaurantContext);