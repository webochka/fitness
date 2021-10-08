// Core
import { useSelector } from 'react-redux';

export const useScore = () => {
    const { score } = useSelector((state) => state.tracker);

    return {
        score
    };
};
