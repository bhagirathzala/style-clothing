import React from 'react';
import './home-page.styles.scss';
import Directory from '../components/directory/directory.component';

export default function HomePage() {
    return (
        <div className='homepage'>
            <Directory/>
        </div>
    )
}
