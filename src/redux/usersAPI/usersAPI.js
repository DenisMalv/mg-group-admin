import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const UsersApi = createApi({
    reducerPath:'usersApi',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3030/api/users/',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().user.user.token;
  
        // console.log(token);
        if (token) {
          headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
      }
    }),
    endpoints:(build)=>({
        // login: build.query({
        //     query: ()=> 'login'
        // })
        getUsers: build.query({
          query: body => ({
            url: ``,
            method: 'GET',
          }),
          providesTags: ['usersApi'],
          // invalidesTags: ['userAuth'],
        }),
        getUserById: build.query({
          query: body => ({
            url: `/${body}`,
            method: 'GET',
          }),
          providesTags: ['usersApi'],
          // invalidesTags: ['userAuth'],
        }),
        deleteUserById: build.mutation({
          query: (body)=> ({
              url: `/${body}`,
              method:'DELETE',
              body,
          }),
          invalidatesTags: ['usersApi'],
        }),
        changeUserRole: build.mutation({
          query: ({id,role})=> ({
              url: `/${id}/role`,
              method:'PATCH',
              body:{
                role
              },
          }),
          invalidatesTags: ['usersApi'],
        }),
        changeUserEmail: build.mutation({
          query: ({id,email})=> ({
              url: `/${id}/email`,
              method:'PATCH',
              body:{
                email
              },
          }),
          invalidatesTags: ['usersApi'],
        }),
        
    })
})


// export const {useLoginQuery} = loginApi
export const {useGetUsersQuery,useGetUserByIdQuery,useDeleteUserByIdMutation,useChangeUserRoleMutation,useChangeUserEmailMutation} = UsersApi