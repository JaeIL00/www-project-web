import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { resArtistListTypes, resArtistDetailTypes, resArtworkListTypes, resArtworkDetailTypes } from './Types'

export const UseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    artistList: builder.query<resArtistListTypes, void>({
      query: () => 'http://api.wwweb.kr/api/artists'
    }),
    artistDetail: builder.query<resArtistDetailTypes, string | undefined>({
      query: (id) => `http://api.wwweb.kr/api/artists/${id}`
    }),
    artworktList: builder.query<resArtworkListTypes, void>({
      query: () => 'http://api.wwweb.kr/api/asset/all'
    }),
    artworkDetail: builder.query<resArtworkDetailTypes, string | undefined>({
      query: (id) => `http://api.wwweb.kr/api/artworks/${id}`
    })
  })
})

export const { useArtistListQuery, useArtistDetailQuery, useArtworktListQuery, useArtworkDetailQuery } = UseApi
