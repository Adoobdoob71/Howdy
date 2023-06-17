import { useRef } from "react"
import { Modalize } from "react-native-modalize"

const useIndex = () => {
    const newReportRef = useRef<Modalize>(null);

    return {
        newReportRef
    }
}

export { useIndex }