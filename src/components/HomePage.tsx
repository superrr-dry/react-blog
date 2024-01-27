// HomePage.tsx
import React from 'react';
import NavigateButton from './NavigateButton';

const HomePage: React.FC = () => {
    return (
        <div>
            <NavigateButton to="/blog" text="ブログ一覧" />
        </div>
    );
}

export default HomePage;
