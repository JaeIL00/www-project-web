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
  data: [
    {
      id: number
      genre: string
      name: string
      nickname: string
      email: string
      contact: string
      description: string
      bio: string
    }
  ]
}
