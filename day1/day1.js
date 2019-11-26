function addInput(...args){
    return args.reduce((acc, val) => ( 
        acc + val
    ));
}

module.exports = addInput;