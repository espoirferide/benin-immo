import { Titre } from "./Bouttons"

export function Produits() { 
    return( 
        <section id="products" className="pt-10 flex justify-center items-center h-full w-full">
            <Titre Texte="Nos Produits" />


       
        </section>
    )
}


export function Carte ({image, Alte,Titre, description, Prix}) {
    return (
           <div className="group flex flex-col justify-center items-center cursor-pointer rounded-3xl relative h-80 w-full overflow-hidden">
    <img   src={image}  alt={Alte}  className="h-full w-75 object-cover rounded-3xl transition-transform duration-500 group-hover:scale-110"  />
    
    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl">
        <div className="text-white"> 
            <h1 className="font-bold text-2xl">{Titre}</h1>
            <p className="text-lg">{description}</p>
            <p className="text-amber-400 font-bold">{Prix}</p>
        </div>
    </div>
</div>
    )
}