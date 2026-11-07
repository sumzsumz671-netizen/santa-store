import { NextResponse } from "next/server";
import { db } from "@/lib/db";
export async function GET(){const items=await db.product.findMany({where:{status:"ACTIVE"},include:{category:true,images:{orderBy:{sortOrder:"asc"}},variants:{where:{available:true},orderBy:{priceCents:"asc"}}}});return NextResponse.json(items);}
