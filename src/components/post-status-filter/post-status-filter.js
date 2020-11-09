import React, {Component} from 'react';

import './post-status-filter.css';

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось'}
        ]
    }

    render() {
        const {filter, onfilterSelect} = this.props;
        const buttons = this.buttons.map(({name, label}) => {
            const active = filter === name;
            const activeClass = active ? 'btn-info' : 'btn-outline-secondary'

            return (
                <button
                    key={name}
                    type="button"
                    className={`btn ${activeClass}`}
                    onClick={() => onfilterSelect(name)}
                >
                    {label}
                </button>
            );
        });

        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
};