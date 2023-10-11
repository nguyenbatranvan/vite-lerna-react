import {useBearStore} from "@icondo/share-state";

export const Header = () => {
    const {bears, removeAllBears} = useBearStore();
    return <h1 onClick={removeAllBears}>
        this is header {bears}
    </h1>
}
