import { isObject } from "formik";

export function getImageUrl(value) {
    if(isObject(value)) {
        return "https://farm" + value.farm + ".staticflickr.com/" 
        + value.server + "/" + value.id + "_" + value.secret + ".jpg";
    }
    return '';
}
