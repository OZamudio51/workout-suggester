import React from 'react';

export default class BodyPartSelectorError extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return false;
    }

    render() {
        if (this.state.hasError) {
            return (
                <h2>Workouts not found. Please try again later.</h2>
            );
        }
        return this.props.children;
    }
}