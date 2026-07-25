import type { JSX } from "react/jsx-runtime"

export const Container = (children: JSX.Element) => {
    return <div className="container">{children}</div>
}