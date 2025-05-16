
import React from 'react';

import Card from './Card';
import {connect} from "react-redux"

function Draw(props)  {
    const {min,max} = props;
    const random = parseInt(Math.random() * (min-max)) + min
    return (
        <Card title="Draw of the numbers" purple>

            <div>
                <span>
                    <span>Result: </span>
                    <strong>{random}</strong>
                </span>
            </div>
         
        </Card>
    );
};

const mapStateToProps = (state) => {
    return {
        min: state.numbers.min,
        max: state.numbers.max
    };
};

export default connect(mapStateToProps)(Draw)
