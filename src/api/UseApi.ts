import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { resArtistListTypes, resArtistDetailTypes, resArtworkListTypes, resArtworkDetailTypes } from './Types'

const { VITE_BASE_URL } = import.meta.env

export const UseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    artistList: builder.query<resArtistListTypes, void>({
      query: () => `${VITE_BASE_URL}/artists`
    }),
    artistDetail: builder.query<resArtistDetailTypes, string | undefined>({
      query: (id) => `${VITE_BASE_URL}/artists/${id}`
    }),
    artworktList: builder.query<resArtworkListTypes, void>({
      query: () => `${VITE_BASE_URL}/asset/all`
    }),
    artworkDetail: builder.query<resArtworkDetailTypes, string | undefined>({
      query: (id) => `${VITE_BASE_URL}/artworks/${id}`
    })
  })
})

export const { useArtistListQuery, useArtistDetailQuery, useArtworktListQuery, useArtworkDetailQuery } = UseApi
