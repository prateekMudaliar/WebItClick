
function Footer(){
    const services = [ "SEO for Small Business", "SEO for Local Services", "Enterprise SEO", "National SEO", "International SEO"];
    const gallery = [ "SEO for Small Business", "SEO for Local Services", "Enterprise SEO", "National SEO", "International SEO"];
    return (
        <>
            {/* <h1 className="text-3xl font-bold underline">This is a footer</h1> */}
            <section className="bg-gradient-to-r from-indigo-800 from-80%  to-indigo-400 % mt-8 p-10 grid gap-8  grid-cols-2 text-slate-300 md:grid-cols-4 md:gap-2 justify-items-center  ">

            <div className="">
                <ul className="ml-10 ">
                    <li className="text-3xl text-white  cursor-pointer font-black max-w-screen-lg "> webItClick </li>
                    <li className="text-xl mt-4"> Our approach to SEO is uniquely built around what we know works…and what we know doesn’t work. With over 200 verified factors in play.</li>
                    
                </ul>
            </div>
            <div className="">
                <ul className="ml-10 ">
                    <li className="text-xl font-black max-w-screen-lg "> Address  </li>
                    <li className="text-xl mt-4"> 411 University St, Seattle, USA</li>
                    <li className="text-xl mt-2"> Open: Mon 8:00 am – 18:00 pm</li>
                    {/* <li className="text-xl"> lst content</li>
                    <li className="text-xl"> lst content</li> */}
                </ul>
            </div>

            <div className="flex flex-col ml-10">
            <h1 className="text-xl font-black max-w-screen-lg mb-2 "> Services</h1>
                <ul className="">
             
                {
                    services.map((service, key) => (
                       <a>  <li className="text-xl mt-1 " key={key}>  {service}</li></a>
                    ))
                }
                
               
                </ul>
            </div>

            {/* <div>
            <h1 className="text-xl font-black max-w-screen-lg mb-2 "> Gallery</h1>
                <ul className="">
                    {
                        gallery.map((gals, key) => (
                            <li key = {key}>{gals}</li>
                        ))
                    }
                </ul>
            </div> */}


                
            </section>

            <section className="bg-gradient-to-r from-indigo-800 from-80%  to-indigo-400 % mb2-2">

            
            </section>
        </>
    );
}

export default Footer