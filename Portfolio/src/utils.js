export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
};
export const credentialUrl = (path) => {
    return path;
}