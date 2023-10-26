'use client'

import { useFetchRepositories } from "@/hooks/useRepos"
import { useFavoriteRepositoryStore } from "@/zustand/favoriteRepos"
import { Repository } from "@/hooks/types"
import Card from "@/components/Card"

export default function Home() {
  const { data, error, isFetching, isLoading } = useFetchRepositories()
  const {addFavoriteRepo, favoriteRepositoryId, removeFavoriteRepo} = useFavoriteRepositoryStore()

  if (isLoading) return <h1>Loading...</h1>

  if (error) return <h1>error</h1>

  return data?.data.map((e: Repository) => (
  <Card key={e.id} repository={e} isFavorite={favoriteRepositoryId.includes(e.id)}/>
  ))
}
