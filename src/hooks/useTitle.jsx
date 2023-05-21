import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `Verse | ${title}`;
    }, [title])
}

export default useTitle;