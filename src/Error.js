import React from 'react';
import Hero from './Hero';
import ErrorBoundary from './ErrorBoundary';

export default function Error(props) {

    return (
        <div>
            <ErrorBoundary>
                <Hero heroName="Batman"/>
            </ErrorBoundary>

            <ErrorBoundary>
                <Hero heroName="aJoker"/>
            </ErrorBoundary>

            <ErrorBoundary>
                <Hero heroName="Antman"/>
            </ErrorBoundary>

            <ErrorBoundary>
                <Hero heroName="Joker"/>
            </ErrorBoundary>

        </div>
    );
}