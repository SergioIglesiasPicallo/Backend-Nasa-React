import { ReactNode } from "react"

export type Props = {
    nasaId: number
    sol?: number
    image?: string
    type?: 'list' | 'details'
    // children?: ReactNode
}