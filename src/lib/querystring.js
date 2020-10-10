import compact from "lodash/compact";

export default (url, params) => {
  const qs = url;
  if (compact(Object.values(params)).length <= 0) {
    return qs;
  }
  const paramsQsArr = Object.keys(params).map(key => {
    const encodedKey = encodeURIComponent(key);
    const encodedVal = encodeURIComponent(params[key]);
    if (params[key] === true) {
      return encodedKey;
    } else if (Array.isArray(params[key])) {
      return params[key]
        .map(val => {
          return encodedKey + "[]=" + encodeURIComponent(val);
        })
        .join("&");
    } else if (params[key]) {
      return encodedKey + "=" + encodedVal;
    }
  });
  return qs + "?" + compact(paramsQsArr).join("&");
};
