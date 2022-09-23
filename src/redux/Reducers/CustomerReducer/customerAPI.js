import api from "config/api";

// Add Customer API
export function addCustomerApi(payload) {
  return api.post("/customer", payload);
}
//Import Customers API
export function importCustomersApi(payload) {
  return api.post("/customer/multiple", payload);
}