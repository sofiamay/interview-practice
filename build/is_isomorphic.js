"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIsoMorphic = void 0;
function isIsoMorphic(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const map = new Map();
    const seen = new Map();
    for (let i = 0; i < str1.length; i++) {
        // if the character in str1 has already been seen
        if (map.has(str1[i])) {
            if (map.get(str1[i]) !== str2[i]) {
                return false;
            }
        }
        else { // new character in str1
            // if the character in str2 has already been seen return false
            if (seen.has(str2[i])) {
                return false;
            }
            else {
                // store mapping of current characters
                map.set(str1[i], str2[i]);
                // mark the current character in str2 as seen
                seen.set(str2[i], true);
            }
        }
    }
    return true;
}
exports.isIsoMorphic = isIsoMorphic;
exports.default = {
    isIsoMorphic,
};
