import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

interface LoginRequest {
  email: string;
  password: string;
}

interface RegisterRequest {
  name: string;
  username: string;
  email: string;
  password: string;
}

interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
}
interface Store {
  name: String;
  openTime: String;
  closeTime: String;
  numOfEmployees: Number;
  employees: [{}];
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:6060",
    prepareHeaders: (headers, { getState }) => {
      const authToken = (getState() as RootState).saveUserAndToken.accessToken;
      if (authToken) {
        headers.set("authorization", `Bearer ${authToken}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    login: builder.mutation<{ user: User; accessToken: string }, LoginRequest>({
      query: (body) => ({
        url: "/api/User/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),
    register: builder.mutation<void, RegisterRequest>({
      query: (body) => ({
        url: "/api/User/register",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
