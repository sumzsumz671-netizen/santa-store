import { db } from "@/lib/db";
export const dynamic = "force-dynamic";
export default async function Home(){
 const products=await db.product.findMany({where:{status:"ACTIVE"},include:{category:true,variants:{where:{available:true},orderBy:{priceCents:"asc"}}},orderBy:{createdAt:"desc"}});
 return <main className="shell"><nav className="nav"><a className="logo" href="/">🎅 SANTA <span>STORE</span></a><div className="flex gap-3 items-center"><a className="pill" href="/account">My Account</a><a className="btn" href="/login">Sign in</a></div></nav>
 <section className="hero"><p className="eyebrow">❄ CHRISTMAS DROP · 2026 ❄</p><h1>Holiday deals.<br/><span>Instant magic.</span></h1><p className="muted max-w-xl">Explore the seasonal collection of digital products and premium license plans.</p><a className="btn mt-5" href="#catalog">Explore the collection ↓</a></section>
 <div className="section-title" id="catalog"><div><p className="eyebrow">THE NORTH POLE INVENTORY</p><h2 className="text-3xl font-black">Featured products</h2></div><span className="pill">Secure checkout · Verified delivery</span></div>
 <section className="products">{products.map(p=><article className="product" key={p.id}><div className="tag">{p.category?.name??"Digital product"}</div><h3>{p.name}</h3><p className="muted text-sm">{p.description.slice(0,130)}</p>{p.variants[0]&&<div className="price">${(p.variants[0].priceCents/100).toFixed(2)}</div>}<a className="btn w-full" href={`/product/${p.slug}`}>View product</a></article>)}</section>
 <footer className="footer">© 2026 Santa Store · <a href="https://discord.gg/sumz">Discord support</a> · Christmas edition <span className="snow">❄</span></footer></main>
}
