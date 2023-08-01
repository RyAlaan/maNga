import { useEffect, useState } from "react"
import { getComplete } from "../services/hero.service"

export const useComplete = () => {
    const [completes, setCompletes] = useState([])
    // const [loading, setLoading] = useState(true)

    useEffect(() => {
        getComplete((data) => {
            setCompletes(data.data)
        })
    }, [])

    return completes
}
