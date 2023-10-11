import './App.css'
import {lazy, Suspense, useState} from "react";
import {useBearStore} from "@icondo/share-state";

const TestCart = lazy(() => import("./components/test-cart.tsx").then(r => ({default: r.TestCart})))

function AppCart() {
    const {bears} = useBearStore();
    const [isShow, setIsShow] = useState<boolean>(false)
    return (
        <>
            {isShow && <Suspense fallback={<p>...</p>}><TestCart/></Suspense>}
            <h1 onClick={() => setIsShow(!isShow)}>Vite + React Cart App {bears}</h1>
        </>
    )
}

export default AppCart
