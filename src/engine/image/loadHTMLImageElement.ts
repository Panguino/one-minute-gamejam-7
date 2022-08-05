
export const loadHTMLImageElement = (
  src: string
): Promise<HTMLImageElement> => {
  const img = document.createElement("img");
  return new Promise((resolve, reject) => {
    img.onload = () => {
      resolve(img);
    };
    img.onerror = (reason) => {
      reject(reason);
    };
    img.src = src;
  });
};
