import React from 'react';
import Header from '../components/Header.jsx';

function ErrorPage() {
    return (
        <>
            <Header />
            <div style={{padding: '2rem', textAlign: 'center'}}>
                <Button variant="outlined" color="error">
                    Errorrito!!!
                </Button>
            </div>
        </>
    )
}

export default ErrorPage;