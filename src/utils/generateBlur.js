import sharp from "sharp";
import fs from "fs/promises";

export const generateBlurDataURL = async (imagePath) => {
  const imageBuffer = await fs.readFile(`./public${imagePath}`);
  const resizedImageBuffer = await sharp(imageBuffer)
    .resize(10, 10) // Small size for blur
    .toBuffer();
  
  const base64 = resizedImageBuffer.toString("base64");
  return `data:image/webp;base64,${base64}`;
};
