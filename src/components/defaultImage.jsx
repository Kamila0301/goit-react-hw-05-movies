const defaultImgURL = `https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700`;
const poster = url => {
  return url ? `https://image.tmdb.org/t/p/w500${url}` : defaultImgURL;
};
export default poster;
