import {createContext} from 'react';

    const TODO_STATUS = createContext ({
        ACTIVE: 'active',
        COMPLETED: 'completed',
    })

    const STATUS_MODE = createContext ({
        ALL: 'all',
        ACTIVE: 'active',
        COMPLETED: 'completed',
    })

    const TEXT_MODE = createContext ({
        READ: 'read',
        WRITE: 'write',
    })

export default TODO_STATUS;
export default STATUS_MODE;
export default TEXT_MODE;
