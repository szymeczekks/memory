import { useState } from "react"
import Button from "./Button";

export default function PairsSetter({setter}) {
    const [value, setValue] = useState(6);
    const [isChanged, setIsChanged] = useState(false);

    function newValue(e) {
        setValue(e.target.value);
        setIsChanged(true);
    }

    function saveNewPairs() {
        setter(value);
        setIsChanged(false);
    }

    return (
        <div className="flex gap-2">
            <input className="border rounded-lg p-2 font-semibold" type="number" name="pairs" id="pairs" value={value} onChange={newValue} />
            {isChanged && <Button onClick={saveNewPairs}>Zapisz</Button>}
        </div>
    )
}