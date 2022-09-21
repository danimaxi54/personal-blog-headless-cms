import React from 'react';

import { Alert } from 'react-bootstrap';

const PreviewAlert = () => (
    <Alert variant='secondary'>
        This is preview mode!{' '}

        <Alert.Link href='/api/exit-preview'>
            Leave preview mode
        </Alert.Link>
    </Alert>
);

export default PreviewAlert;
