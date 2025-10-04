import Info from "./Info.tsx";
import ImageHolder from "./ImageHolder.tsx";
import {useEffect, useState} from "react";
import {API_BASE_URL} from "../api/config.ts";

const Content = () => {
    const [demos, setDemos] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`${API_BASE_URL}/demos`, {
            headers: {
                'accept': '*/*'
            }
        })
            .then(response => response.json())
            .then(data => {
                setDemos(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return <div className="flex flex-1 flex-col">
        <div className="flex flex-1 h-[60vh] items-center justify-center flex-row space-x-20">
            <Info/>
            <ImageHolder/>
        </div>
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Demos</h2>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}
            {!loading && !error && (
                <ul className="list-disc list-inside">
                    {demos.map((demo, index) => (
                        <li key={index}>{demo}</li>
                    ))}
                </ul>
            )}
        </div>
    </div>
}

export default Content;