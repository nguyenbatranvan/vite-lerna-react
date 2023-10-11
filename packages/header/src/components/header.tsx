import {useBearStore} from "share-state/es";

export const Header = () => {
    const {bears, removeAllBears} = useBearStore();
    return <h1 onClick={removeAllBears}>
        this is header {bears}
    </h1>
}
