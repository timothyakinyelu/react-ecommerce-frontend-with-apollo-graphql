import React from 'react';
import '../styles/notification.css';

const NotificationIcon: React.FC = (): JSX.Element => {
    // const increment = () => {
    //     const el = document.querySelector('.notification') as HTMLElement;

    //     const count = Number(el?.getAttribute('data-count')) || 0;
    //     el?.setAttribute('data-count', (count + 1).toString());
    //     el?.classList.remove('notify');
    //     (function () {
    //         return el.offsetWidth;
    //     })();
    //     el.classList.add('notify');
    //     if (count === 0) {
    //         el.classList.add('show-count');
    //     }
    // };

    return (
        <div className="notification-container">
            <div className="notification"></div>
            {/* <button onClick={increment}>Increment Notifications</button> */}
        </div>
    );
};

export default NotificationIcon;
