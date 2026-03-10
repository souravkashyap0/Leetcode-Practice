/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    let setS = new Map();
    let setT = new Map();

    for (let i = 0; i < s.length; i++) {
        setS.set(s[i], (setS.get(s[i]) || 0) + 1);
        setT.set(t[i], (setT.get(t[i]) || 0) + 1);
    }

    for (let [key] of setS) {
        if (setS.get(key) !== setT.get(key)) {
            return false;
        }
    }

    return true;
};