import { useEffect, useState } from 'react';
import { subscribe, unsubscribe } from './resources/API';
export function Effects(props: { sourceId: string }) {
    const [msg, setMsg] = useState(-1);
    useEffect(() => {
        const cb = (message: number) => {
            setMsg(message);
        };
        subscribe(props.sourceId, cb);
        return () => {
            unsubscribe(props.sourceId, cb);
            setMsg(-1);
        };
    }, [props.sourceId]);
    return (
        <div>
            {props.sourceId}: {msg}
        </div>
    );
}
