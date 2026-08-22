
import type { PropsWithChildren } from "react"
import './container.scss'
export const Container = ({children}: PropsWithChildren) => {
    return <div className="container">{children}</div>
}