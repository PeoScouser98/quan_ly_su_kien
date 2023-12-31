import { UserType } from '@/common/types/entities'
import { createApi } from '@reduxjs/toolkit/query/react'
import axiosBaseQuery from '../helper'

type SigninMetadata = Omit<UserType, 'password'> & { token: string }
type SigninPayload = Pick<UserType, 'email' | 'password'>
type SignupPayload = Pick<UserType, 'email' | 'name' | 'phone' | 'password'>
type SignupMetadata = Omit<UserType, 'password'>

const reducerPath = 'auth/api' as const
const tagTypes = ['Auth'] as const

export const authApi = createApi({
   reducerPath,
   tagTypes,
   baseQuery: axiosBaseQuery(),
   endpoints: (build) => {
      return {
         signin: build.mutation<HttpResponse<SigninMetadata>, SigninPayload>({
            query: (payload) => ({ url: '/login', method: 'POST', data: payload }),
            onQueryStarted: async (_, { queryFulfilled }) => {
               const { data } = await queryFulfilled
               const accessToken = data?.metadata?.token
               localStorage.setItem('access_token', `Bearer ${accessToken}`)
            }
         }),
         signup: build.mutation<HttpResponse<SignupMetadata>, SignupPayload>({
            query: (payload) => ({ url: '/register', method: 'POST', data: payload })
         })
      }
   }
})

const { useSigninMutation, useSignupMutation } = authApi

export { useSigninMutation, useSignupMutation }
