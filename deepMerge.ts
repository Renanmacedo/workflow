type DeepObject = Record<string, string | number | boolean | object> ;

function isObject(target: DeepObject){
    return typeof target === 'object' && target.constructor  === Object.prototype.constructor;
}
export default function deepMerge(source: any, target: any){
    const clone = {...target }
    if(isObject(source) && isObject(target)){
        Object.keys(source).forEach(key => {
            if(isObject(source[key]) && key in target) {
                clone[key] = deepMerge(source[key], target[key])
            }else if(key in target){
                clone[key] = clone[key] = Array.isArray(source[key]) ? [...source[key], ...target[key]] : target[key];
            }else {
                clone[key] = source[key]
            }
        })
    }
    return clone;
}