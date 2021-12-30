import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x437bdb44ACdF62D3C7bD6fC6CdD91605E4882B27",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Carver's Village",
        description: "This NFT will give you access to CarverDAO!",
        image: readFileSync("scripts/assets/build15.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()