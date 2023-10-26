import { api } from "@/api/github";
import { useQuery } from "@tanstack/react-query";

async function fetchRepos() {
 return api.get('/users/AlanTyping/repos')
}

export function useFetchRepositories() {
    return useQuery({queryKey: ['repos'], queryFn: fetchRepos})
}