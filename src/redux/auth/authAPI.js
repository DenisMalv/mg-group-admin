import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const AuthApi = createApi({
    reducerPath:'userAuth',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3030/api/auth/',
    prepareHeaders: (headers, { getState }) => {
        console.log(headers)
        console.log('login me pls auto');
        const token = getState().user.user.token;
  
        console.log(token);
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
        register: build.mutation({
            query: body => ({
              url: `register/${body.registerToken}`,
              method: 'POST',
              body:body.newUser,
            }),
            invalidatesTags: ['userAuth'],
        }),

        login: build.mutation({
            query: (body)=> ({
                url: 'login',
                method:'POST',
                body,
            })
        }),
        getUser: build.query({
            query: body => ({
              url: ``,
              method: 'GET',
            //   headers: {
            //     // Authorization: `Bearer ${localStorage.getItem('userToken')}`,
            //     Authorization: `Bearer ${123}`,
            //   },
            }),
            providesTags: ['userAuth'],
            // invalidesTags: ['userAuth'],
        }),
        logOut: build.mutation({
            query: token => ({
              url: `logout`,
              method: 'POST',
              // headers: { Authorization: `Bearer ${token}` },
            }),
            invalidatesTags: ['userAuth'],
        }),
        createRegisterToken: build.mutation({
            query: body => ({
              url: `register/createRegisterToken`,
              method: 'POST',
            }),
            invalidatesTags: ['userAuth'],
        }),
    })
})


// export const {useLoginQuery} = loginApi
export const {useLoginMutation,useRegisterMutation,useLogOutMutation,useGetUserQuery,useCreateRegisterTokenMutation} = AuthApi