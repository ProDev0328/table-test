import { addCustomerApi, importCustomersApi } from "./customerAPI";

// Add Customer
export const addCustomer = async (payload) => {
  const response = await addCustomerApi(payload);
  return response.data;
};
//Import Customers
export const importCustomers = async (payload) => {
  const response = await importCustomersApi(payload);
  return response.data;
};