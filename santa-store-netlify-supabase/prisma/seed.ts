import { PrismaClient } from "@prisma/client";
const db=new PrismaClient();
async function main(){
 const cat=await db.category.upsert({where:{slug:"licenses"},update:{},create:{name:"License Plans",slug:"licenses"}});
 await db.product.upsert({where:{slug:"holiday-license-starter"},update:{},create:{slug:"holiday-license-starter",name:"Holiday License Starter",description:"Starter digital license plan. Configure your application and duration before enabling sales.",status:"DRAFT",categoryId:cat.id,variants:{create:{name:"30 days",priceCents:1500,durationDays:30,deviceLimit:1,applicationId:process.env.FENAR_APPLICATION_ID||"CONFIGURE_ME",available:false}}}});
 console.log("Seed complete. Sample product is intentionally DRAFT/unavailable.");
}
main().finally(()=>db.$disconnect());
