"Use Client"
import { useState, useEffect, use } from "react";

export const useDebounce = (searchString: string, delay: number) => {
    const [debouncedValue, setDebounceValue] = useState<string>(searchString);

    useEffect(() => {
        const timerId = setTimeout(() => {
            console.log("timer run")
            setDebounceValue(searchString);
        }, delay);

        return () => {
            console.log("timer delete")
            clearTimeout(timerId)
        }

    }, [searchString, delay]);



    return debouncedValue
};

export default useDebounce;
