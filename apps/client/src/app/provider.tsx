"use client";

import React, { useState } from 'react'
import { transformer } from "@repo/server/transformer";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'

import { trpc } from "@/utils/trpc";

const Provider = ({ children }: { children: React.ReactNode }) => {


    const [queryClient] = useState(() => new QueryClient())
    const [trpcClient] = useState(() => {
        return trpc.createClient({
            transformer,
            links: [
                httpBatchLink({
                    url: 'http://localhost:3000/api/trpc',
                }),
            ],
        })
    })

    return (
        <div>
            <trpc.Provider queryClient={queryClient} client={trpcClient}>
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </trpc.Provider>
        </div>
    )
}

export default Provider