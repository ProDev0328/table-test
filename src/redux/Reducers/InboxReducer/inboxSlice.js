import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { listInquiries, listMessages, sendMessage } from "./actions";

export const getInquiries = createAsyncThunk(
  "inbox/listInquiries", 
  async () => listInquiries()
);
export const getMessages = createAsyncThunk(
  "inbox/listMessages",
  async (payload) => listMessages(payload)
);

export const postMessage = createAsyncThunk(
  "inbox/sendMessage",
  async (payload) => sendMessage(payload)
);

const initialState = {
  inquiries: [],
  messages: [],
  customer: null,
};

export const inboxSlice = createSlice({
  name: "inbox",
  initialState,
  reducers: {
    setMessages: (state, action) => {
      state.messages = [...state.messages, ...action.payload];
    },
    initMessages: (state, action) => {
      state.messages = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInquiries.fulfilled, (state, action) => {
        state.inquiries = action.payload;
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        state.customer = action.payload;
        state.messages = action.payload.sms;
      })
      .addCase(postMessage.fulfilled, (state, action) => {
        state.messages = [...state.messages, ...[action.payload]];
      });
  },
});

export const { setMessages, initMessages } = inboxSlice.actions;
export default inboxSlice.reducer;
