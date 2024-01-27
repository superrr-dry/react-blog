import { useLocation } from 'react-router-dom';

const useShouldShowButton = (pathsToShow: string[]) => {
    const location = useLocation();
    return pathsToShow.includes(location.pathname);
}

export default useShouldShowButton;
