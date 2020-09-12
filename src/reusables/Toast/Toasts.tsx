/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from 'react';
import NewToast from './NewToast';
import { useLazyQuery, useMutation } from '@apollo/client';
import { GET_TOASTS } from '../../graphql/query/toast';
import '../../styles/toast.css';
import { TOGGLE_TOAST } from '../../graphql/mutations/toast';

const Toast: React.FC = (): JSX.Element => {
    const [fetchToasts, { data }] = useLazyQuery<ToastState>(GET_TOASTS);
    const [mutate] = useMutation(TOGGLE_TOAST);
    const _isMounted = useRef(true);

    const autoDelete = true;
    const dismissTime = 5000;
    const position = 'top-right';

    useEffect(() => {
        const ac = new AbortController();
        if (_isMounted) {
            fetchToasts();
        }

        if (data?.toasts === null) return;

        return () => {
            _isMounted.current = false;
            ac.abort();
        };
    }, [_isMounted, fetchToasts, data]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (data?.toasts === undefined) return;
            if (data.toasts.length > 0 && data.toasts[0] !== null) {
                if (autoDelete) {
                    const toast = data?.toasts[0];
                    mutate({
                        variables: {
                            toast: toast,
                        },
                    });
                }
            }
        }, dismissTime);

        return () => {
            clearInterval(interval);
        };

        // eslint-disable-next-line
    }, [autoDelete, dismissTime, data]);

    return (
        <div className={`toasts-container ${position}`} role="alert">
            {data?.toasts.map((toast: any) => {
                const { id, title, message, backgroundColor } = toast;
                return (
                    <NewToast
                        {...toast}
                        key={id}
                        id={id}
                        title={title}
                        message={message}
                        backgroundColor={backgroundColor}
                        iconColor={backgroundColor}
                        position={position}
                    />
                );
            })}
        </div>
    );
};

export default Toast;
