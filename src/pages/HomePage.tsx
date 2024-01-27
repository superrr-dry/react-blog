import React from 'react';
import NavigateButton from '../components/NavigateButton';

const HomePage: React.FC = () => {
    return (
        <div>
            <NavigateButton to="/blog" text="ブログ一覧" />
        </div>
    );
}

export default HomePage;
