import React from 'react';
import './OfflinePage.css';

const OfflinePage = () => {
    return (
        <div className="offline-container">
            <div className="offline-content">
                <i className="offline-icon">📶</i>
                <h1>You're offline</h1>
                <p>Please check your internet connection and try again.</p>
                <button
                    className="retry-button"
                    // onClick={() => window.location.reload()}
                >
                    Retry
                </button>
            </div>
        </div>
    );
};

export default OfflinePage;