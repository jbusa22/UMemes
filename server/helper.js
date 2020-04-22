module.exports = {
    getQuery: (query) => {
        var q = /q=(\w*)/.exec(query);
        if(q.length > 1) {
          return q[1];
        }
        return null;
    }
}
