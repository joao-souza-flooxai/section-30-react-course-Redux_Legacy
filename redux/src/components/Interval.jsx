import './interval.css';
import React from 'react';

import Card from './Card';
import { connect } from 'react-redux';
import {changeMinNumber, changeMaxNumber} from "../store/actions/numbers"

function Interval(props)  {

    const {min,max} = props;

    return (
        <Card title="Numbers interval" red>

            <div className="Interval">
                <span>
                    <strong>Min: </strong>
                    <input type="number" value={min} onChange={e=>props.changeMinNumber(+e.target.value)}/>
                </span>
                <span>
                    <strong>Máx: </strong>
                    <input type="number" value={max} onChange={e=>props.changeMaxNumber(+e.target.value)} />
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

function mapActionCreatorsToProps(dispatch) {
    return {
        changeMinNumber(novoNumero) {
            // action creator -> action
            const action = changeMinNumber(novoNumero);
            dispatch(action);
        },
        changeMaxNumber(novoNumero) {
            // action creator -> action
            const action = changeMaxNumber(novoNumero);
            dispatch(action);
        }
    };
}

export default connect(
    mapStateToProps,
    mapActionCreatorsToProps
)(Interval);