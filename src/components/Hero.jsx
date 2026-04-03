import {Boutton} from './Bouttons'

export function Hero() {
    return (
        <section className="bg-[url('./hero.webp')] bg-cover bg-center h-90 w-full flex flex-col  justify-center gap-2">
            <div className=" font-lobster text-4xl md:text-5xl font-bold text-[#40d672] h-full pt-25 w-full pl-10">
            Bienvenue chez <br /> <span className="text-amber-300">BENIN-IMMO</span> <br /> Votre Agence Immobilière à Cotonou
           </div>
           <div className="flex gap-3 pb-3 pl-10 md:pb-8">
            <Boutton identifiant="#about" Texte="En savoir plus"/>
            <Boutton identifiant="#products" Texte="Nos produits"/>    
           </div>
        </section>   
    );
}


          