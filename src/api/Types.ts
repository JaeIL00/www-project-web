export interface resArtistListTypes {
  data: [
    {
      id: number
      genre: string
      nickname: string
      profileImage: string
    }
  ]
}
export interface resArtistDetailTypes {
  data: {
    id: number
    genre: string
    name: string
    nickname: string
    email: string
    contact: string
    description: string
    bio: string
    profileImage: string
    type: string
    linkTree: string
    assets: [
      {
        genre: string
        isMain: boolean
        type: string
        url: string
      }
    ]
  }
}
export interface resArtworkListTypes {
  data: {
    artist: {
      id: number
    }
    genre: string
    type: string
    url: string
    isMain: boolean
  }[]
}
