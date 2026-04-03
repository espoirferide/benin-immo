export function Conctact () {
    return (
        <section className="flex justify-center items-center h-full w-full pt-10">
             <article>
                <div className="form-card1">
  <div className="form-card2">
    <form className="form">
      <p className="form-heading">Contactez nous</p>

      <div className="form-field">
        <input required="" placeholder="Nom & Prénom" class="input-field" type="text" />
      </div>

      <div className="form-field">
        <input
          required=""
          placeholder="Email"
          className="input-field"
          type="email"
        />
      </div>

      {/* <div className="form-field">
        <input
          required=""
          placeholder="Subject"
          className="input-field"
          type="text"
        />
      </div> */}

      <div className="form-field">
        <textarea
          required=""
          placeholder="Message"
          cols="30"
          rows="3"
          className="input-field"
        ></textarea>
      </div>

      <button className="sendMessage-btn">Envoyez</button>
    </form>
  </div>
</div>

             </article> 
             {/* <article>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
             </article> */}
        
        </section>
    )
}