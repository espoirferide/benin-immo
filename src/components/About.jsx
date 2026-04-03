import { Deux, Titre } from "./Bouttons";
import TextType from '../TextType'
export function About() {
    return ( 
        <section id="about" className=" h-full w-full pt-5">
            <Titre Texte="À propos Benin de Immo" />
            <article className="flex flex-col  lg:grid lg:grid-cols-2 lg:px-6 justify-center gap-2">
              <div className="flex flex-col pl-3 md:pl-5  pb-5">
                    <p className="p-3 font-medium  lg:text-xl text-lg md:p-6 md:mr-15 lg:mr-0 lg:pr-10 ">
                          <TextType 
                text={[" Votre projet immobilier au Bénin mérite l’excellence." ,
                       " Chez BENIN-IMMO, nous mettons à votre disposition une sélection rigoureuse de biens : villas, appartements meublés, terrains et immeubles locatifs.",
                        "  Présents au cœur des quartiers stratégiques nous guidons nos clients avec transparence et professionnalisme."]}
                 typingSpeed={75}
                 pauseDuration={1500}
                showCursor
                cursorCharacter="_"
                 texts={[ " Que ce soit pour une location résidentielle ou un achat foncier,",
                         " notre équipe vous conseille à chaque étape pour transformer votre recherche en une réussite concrète."]}
                 deletingSpeed={50}
                 variableSpeedEnabled={false}
                  variableSpeedMin={60}
                 variableSpeedMax={120}
                cursorBlinkDuration={0.5}
                   />
                       
                    </p>
                 <a href="#products"> <Deux Texte="Nos Produits" /> </a>
              </div>
               <div className="overflow-hidden h-full w-full">
                <img src="./villa.jpg" alt="villa" className="w-full h-60 md:h-100 object-cover object-top lg:rounded-2xl" />
            </div>
            </article>
        </section>  
    )
}



                     

                       
