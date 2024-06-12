import React, { useState } from "react";

const useFlip = (initialFlipState = true) => {
    const [state, setState] = useState(initialFlipState);

    const flipState = () => {
        setState(isFlippedup => !isFlippedup)
    }
    return [state, flipState]
}

export default useFlip ;