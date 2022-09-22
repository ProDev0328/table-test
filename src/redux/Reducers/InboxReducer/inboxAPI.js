import api from "config/api";

// List Inquiries API
export function listInquiriesApi() {
  return api.get("customer");
}
// List Messages API
export function listMessagesApi(payload) {
  return api.get(`/customer/${payload}`);
}
// Send Message API
export function sendMessageApi(payload) {
  return api.post("sms/send", payload);
}
