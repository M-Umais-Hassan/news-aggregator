export class CustomException extends Error {
  constructor(message = "", errorData = []) {
    super();
    this.message = message;
    this.errorData = errorData;
  }
}

export const getSlicedText = (text, slicer = 100) => {
  console.log("data here", text?.slice(0, slicer));
  const slicedText = text?.slice(0, slicer) || "";
  const elipses = text?.length > slicer ? "..." : "";
  return `${slicedText}${elipses}`;
};
