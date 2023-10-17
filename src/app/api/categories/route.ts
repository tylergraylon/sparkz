import axios from "axios";
import { collections, SEA_API_KEY } from "../seacollections/data";
import ghost from "../../../../public/ghost.png";
import { GET_COLLECTION } from "@/services/endPoints";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await Promise.all([
    getCategory(collections[collections.length - 3], "All"),
    getCategory(collections[Math.round(collections.length / 2)], "Popular"),
    getCategory(collections[0], "Top"),
    getGadgetCategory("Gadgets"),
  ]);

  const result = data.filter((item) => item != null);

  return NextResponse.json({ data: result });
}

const getCategory = async (
  col: (typeof collections)[number],
  category: string
) => {
  try {
    const metadata = await axios.get(GET_COLLECTION(col), {
      headers: {
        "x-api-key": SEA_API_KEY,
      },
    });

    if (metadata.status === 200) {
      const img = metadata.data.image_url.includes('googleusercontent') ? (
        `${metadata.data.image_url.split('=')[0]}=s1500` 
      ): (
        metadata.data.image_url
      )

      return {
        category,
        img,
      };
    }
    
      

    return {
      category,
      img: ghost.src,
    };
  } catch (error) {
    console.log(error);

    return;
  }
};

const getGadgetCategory = async (category: string) => {
  const gadgets = await import("../seacollections/gadgets.json").then(
    (res) => res.default
  );
  return {
    category,
    img: gadgets[0].img,
  };
};
