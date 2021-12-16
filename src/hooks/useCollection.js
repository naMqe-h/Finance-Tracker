import { useState, useEffect } from "react"
import { db } from '../firebase/config'

export const useCollection = (collection) => {
    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        let ref = db.collection(collection)

        const unsub = ref.onSnapshot((snapshot) => {
            let result = []
            snapshot.docs.forEach(doc => {
                result.push({ ...doc.data(), id: doc.id })
            })

            setDocuments(result)
            setError(null)
        }, (error) => {
            console.log(error)
            setError('Could not fetch the data')
        })

        return () => unsub()

    }, [collection])

    return { documents, error }
}