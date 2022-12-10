import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { resArtistListTypes } from './Types'

const { VITE_BASE_URL } = import.meta.env

export const UseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    artistList: builder.query<resArtistListTypes, void>({
      query: () => ({
        url: `${VITE_BASE_URL}/artists`,
        method: 'GET'
      })
    })
  })
})

export const { useArtistListQuery } = UseApi
