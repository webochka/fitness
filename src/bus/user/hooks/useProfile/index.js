// Core
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { userActions } from '../../actions';

export const useProfile = () => {
    const dispatch = useDispatch();

    const { profile, isLoading } = useSelector((state) => state.user);

    const login = (credentials) => {
        dispatch(userActions.loginUserAsync(credentials));
    };

    const logout = () => {
        dispatch(userActions.logoutUserAsync());
    };

    const register = (user) => {
        dispatch(userActions.registerUserAsync(user));
    };

    const update = (user) => {
        dispatch(userActions.updateMeAsync(user));
    };

    return {
        login,
        logout,
        register,
        update,
        profile,
        isLoading
    };
};
