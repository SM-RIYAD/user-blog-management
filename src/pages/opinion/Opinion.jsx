import Header from "../Home/Header/Header";

const Opinion = () => {
  return (
    <div className="">
      
        <Header></Header>
        
     

      <div className="lg:max-w-6xl lg:mx-auto ">
        <div className="card w-full bg-base-100 shadow-xl image-full">
          <figure className="w-full ">
            <img
              className=" max-h-[#200px] object-fill"
              src="https://images.unsplash.com/opengraph/1x1.png?auto=format&fit=crop&w=1200&h=630&q=60&mark-w=64&mark-align=top%2Cleft&mark-pad=50&blend-w=1&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1496661415325-ef852f9e8e7c%3Fcrop%3Dfaces%252Cedges%26cs%3Dtinysrgb%26fit%3Dcrop%26fm%3Djpg%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8NXx8YmxvZyUyMGNvdmVyfGVufDB8fHx8MTY5NjQxMzUwMnww%26ixlib%3Drb-4.0.3%26q%3D60%26w%3D1200%26auto%3Dformat%26h%3D630%26mark-w%3D750%26mark-align%3Dmiddle%252Ccenter%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fauto%253Dformat%2526fit%253Dcrop%2526w%253D750%2526h%253D84%2526q%253D60%2526txt-color%253D000000%2526txt-size%253D40%2526txt-align%253Dmiddle%25252Cleft%2526txt-pad%253D80%2526txt-width%253D660%2526txt-clip%253Dellipsis%2526txt%253Dblog%252520cover%26blend%3D000000"
              alt="Shoes"
            />
          </figure>
          <div className="card-body p-10">
            <h1 className="text-2xl">Give us your honest opinion</h1>
            <textarea name="" id="" cols="30" rows="10"></textarea>
           


            <button className="btn btn-primary bg-black mt-5 border-0 text-white">
              Submit{" "}
            </button>
     
          </div>
        </div>
      </div>

   


    </div>
  );
};

export default Opinion;
