export function Header() {
    return (
        <header className=" h-10 w-full flex items-center justify-center p-4 top-10 left-0 right-0 fixed z-50 text-white">
        
<div className="nav">
  <div className="container font-space-grotesk">
  <a href="#about">  <div className="btn">À propos</div></a>
    <a href="#products">  <div className="btn"> Nos Produits</div></a>
    <a href="#contact">  <div className="btn">Contacts</div></a>
    <svg
      className="outline"
      overflow="visible"
      width="300"
      height="60"
      viewBox="0 0 300 60"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className="rect"
        pathLength="100"
        x="0"
        y="0"
        width="300"
        height="60"
        fill="transparent"
        strokeWidth="5"
      ></rect>
    </svg>
  </div>
</div>

        </header>
    );
}