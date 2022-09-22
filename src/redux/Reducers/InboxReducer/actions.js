import { listInquiriesApi, listMessagesApi, sendMessageApi } from "./inboxAPI";

// List Inquiries
export const listInquiries = async () => {
  const response = await listInquiriesApi();
  return response.data;
};
// List Messages
export const listMessages = async (userId) => {
  const response = await listMessagesApi(userId);
  return response.data;
};
// Send Message
export const sendMessage = async (payload) => {
  const response = await sendMessageApi(payload);
  return response.data;
};