import { useNavigate } from 'react-router-dom';

import * as authService from '../../services/authService';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext, useEffect } from 'react';

const Logout = () => {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);

    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                const confirmation = window.confirm('Are you sure you want to logout?');
                navigate('/')
                if (confirmation) {
                    logout();
                    navigate('/');
                }
            })
            .catch(() => {
                navigate('/');
            })
    }, [])

    return null;
};

export default Logout;