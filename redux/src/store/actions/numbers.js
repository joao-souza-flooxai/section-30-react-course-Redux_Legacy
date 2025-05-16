export function changeMinNumber(novoNumero) {
    return {
        type: 'NUM_MIN_CHANGED',
        payload: novoNumero
    };
}

export function changeMaxNumber(novoNumero) {
    return {
        type: 'NUM_MAX_CHANGED',
        payload: novoNumero
    };
}