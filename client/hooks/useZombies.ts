import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { getZombies, addZombie } from '../apis/zombies.ts'

export function useZombies() {
  const query = useQuery(['zombies'], getZombies)
  return {
    ...query,
    add: useAddZombie(),
    // delete: useDeleteZombie(),
  }
}

export function useZombiesMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
) {
  const queryClient = useQueryClient()
  const mutation = useMutation(mutationFn, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['zombies'] })
    },
  })

  return mutation
}

function useAddZombie() {
  return useZombiesMutation(addZombie)
}

// function useDeleteZombie() {
//   return useZombiesMutation(deleteZombie)
// }
