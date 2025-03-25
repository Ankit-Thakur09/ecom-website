import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseQuery = fetchBaseQuery({
//   baseUrl: "http://localhost:8000/api/user/",
//   credentials: "include",
//   prepareHeaders: (headers) => {
//     headers.set("Content-Type", "application/json");
//     return headers;
//   },
// });



export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/admin/",
    credentials: "include", 
  }),
  endpoints: (builder) => ({
    createAdmin: builder.mutation({
      query: (user) => ({
        url: "createAdmin",
        method: "POST",
        body: user,
      }),
    }),
    addProduct: builder.mutation({
      query: (user) => ({
        url: "addproduct",
        method: "POST",
        body: user,
      }),
    }),

    // verifyUser: builder.mutation({
    //   query: (user) => ({
    //     url: "verify-email",
    //     method: "POST",
    //     body: user,
    //   }),
    // }),
    // loginUser: builder.mutation({
    //   query: (user) => ({
    //     url: "login",
    //     method: "POST",
    //     body: user,
    //   }),
    // }),
    // getUser: builder.query({
    //   query: () => ({
    //     url: "profile",
    //     method: "GET",
    //     credentials: "include", // ⬅️ Important for cookies to be sent
    //     headers: { "Content-Type": "application/json" },
    //   }),
    // }),
    // logoutUser: builder.mutation({
    //   query: () => ({
    //     url: "logout",
    //     method: "POST",
    //     body: {},
    //     credentials: "include",
    //   }),
    // }),
    // resetPasswordLink: builder.mutation({
    //   query: (user) => ({
    //     url: "/reset-password-link",
    //     method: "POST",
    //     body: user,
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //   }),
    // }),
    // resetPassword: builder.mutation({
    //   query: (data) => {
    //     const { id, token, ...values } = data;
    //     const actualData = { ...values };
    //     return {
    //       url: `/reset-password/${id}/${token}`,
    //       method: "POST",
    //       body: actualData,
    //       headers: {
    //         "Content-type": "application/json",
    //       },
    //     };
    //   },
    // }),
    // changePassword: builder.mutation({
    //   query: (actualData) => {
    //     return {
    //       url: `/change_password`,
    //       method: "POST",
    //       body: actualData,
    //       credentials: "include",
    //       headers: {
    //         "Content-type": "application/json",
    //       },
    //     };
    //   },
    // }),
    // follow: builder.mutation({
    //   query: ({ userId, targetUserId }) => ({
    //     url: "follow",
    //     method: "POST",
    //     body: { userId, targetUserId },
    //     credentials: "include",
    //   }),
    // }),
    // unfollow: builder.mutation({
    //   query: ({ userId, targetUserId }) => ({
    //     url: "unfollow",
    //     method: "POST",
    //     body: { userId, targetUserId },
    //     credentials: "include",
    //   }),
    // }),
  }),
});

export const {
//   useCreateUserMutation,
//   useVerifyUserMutation,
//   useLoginUserMutation,
//   useGetUserQuery,
//   useLogoutUserMutation,
//   useResetPasswordLinkMutation,
//   useResetPasswordMutation,
//   useChangePasswordMutation,
//   useFollowMutation,
    //   useUnfollowMutation,
    useCreateAdminMutation,
    useAddProductMutation,
} = authApi;