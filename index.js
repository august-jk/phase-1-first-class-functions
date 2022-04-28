function receivesAFunction(cb) {
return cb();
}
receivesAFunction(function() {return 'Hello';});

function returnsANamedFunction() {
    return function cat() {
        return 'I love Luna';
    }
}
function returnsAnAnonymousFunction() {
    return function() {
    return 'anonymous';        
    }
}
