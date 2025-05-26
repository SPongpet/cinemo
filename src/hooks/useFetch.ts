import { useQuery } from '@tanstack/react-query'

import instanceAxios from '@api/server'

import type { UseQueryResult } from '@tanstack/react-query'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

interface UseFetchProps<TPayload = Record<string, any>> {
  url: string
  method?: AxiosRequestConfig['method']
  payload?: TPayload
  enabled?: boolean
  refetchOnWindowFocus?: boolean
}

const useFetch = <TResponse = any, TPayload = Record<string, any>>({
  url,
  method = 'post',
  payload = {} as TPayload,
  enabled = true,
  refetchOnWindowFocus = false,
}: UseFetchProps<TPayload>): UseQueryResult<AxiosResponse<TResponse>> => {
  const query = useQuery({
    queryKey: [`${method}-${url}`, payload],
    queryFn: async () => {
      const res = await instanceAxios<TResponse>({
        method,
        url,
        data: payload,
      })

      return res
    },
    enabled,
    refetchOnWindowFocus,
  })

  return query
}

export default useFetch
