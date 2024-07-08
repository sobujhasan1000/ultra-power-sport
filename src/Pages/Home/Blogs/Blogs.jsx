const Blogs = () => {
  return (
    <div className="m-4 ">
      <h1 className="text-center text-lg font-semibold">
        Read our daily Blogs
      </h1>
      <div className="card bg-base-100 w-96 shadow-xl m-4">
        <figure className="px-10 pt-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          {/* <h2 className="card-title">Shoes!</h2> */}
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-start">
            <button className="  p-1 text-red-400 ">Read now''</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
