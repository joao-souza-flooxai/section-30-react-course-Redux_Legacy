
import React from 'react';

import Card from './Card';

import {connect} from "react-redux"


function Average(props) {
    const {min,max} = props;
    return (
        <Card title="Average of the numbers" green>

            <div>
                <span>
                    <span>Result: </span>
                    <strong>{ (min + max)/2 }</strong>
                </span>
            </div>
         
        </Card>
    );
};
// Essa função diz como mapear os dados do estado global para as props do componente
const mapStateToProps = (state) => {
    return {
        min: state.numbers.min,
        max: state.numbers.max
    };
};

// Exporta o componente conectado ao Redux
export default connect(mapStateToProps)(Average);
