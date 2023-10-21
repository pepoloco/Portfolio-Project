export const getImageUrl = (path) =>{
    return new URL(`Components/${path}`, import.meta.url).href;
}