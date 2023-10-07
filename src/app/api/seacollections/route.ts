import axios from "axios";
import { collections, SEA_API_KEY } from "./data";
import { GET_COLLECTION_ANALYTICS, GET_COLLECTION } from "@/services/endPoints";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  let data = [];

  console.log(query);

  switch (query) {
    case "all":
    case "popular":
      data = await getCollectionData(collections.length);
      break;
    case "top":
      data = await getCollectionData(10);
      break;
    default:
      data = await getCollectionData(collections.length);
  }

  const result = data.filter((item) => item != null);

  //   console.log(result);

  return NextResponse.json({ data: result });
}

const getCollectionData = async (param: number) =>
  await Promise.all(
    collections.slice(0, param).map(async (col) => {
      try {
        const price = await axios.get(GET_COLLECTION_ANALYTICS(col), {
          headers: {
            "x-api-key": SEA_API_KEY,
          },
        });
        const metadata = await axios.get(GET_COLLECTION(col), {
          headers: {
            "x-api-key": SEA_API_KEY,
          },
        });

        const data = await Promise.all([price, metadata]);

        if (data[0].status === 200) {
          return {
            name: data[1].data.name,
            img: data[1].data.image_url,
            floor_price: data[0].data.total.floor_price.toLocaleString(
              undefined,
              { maximumFractionDigits: 2 }
            ),
            weekly_volume: Math.round(
              data[0].data.total.volume as number
            ).toLocaleString(),
          };
        }

        return {
          name: "N/A",
          img: "N/A",
          floor_price: "N/A",
          weekly_volume: "N/A",
        };
      } catch (error) {
        // console.log("error", error);
        return;
      }
    })
  );
