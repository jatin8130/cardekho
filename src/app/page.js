import './home.css';

async function carapi() {
  let data = await fetch("http://localhost:3000/api/car",{cache:"no-cache"});
  data = await data.json();
  return data.result;
}

const page = async () => {

  const cardata = await carapi();

  return (
    <div>
      <div className="row">
        <div className="hometext">
          <p className='wel'>WelCome to CarDekho</p>
          <h1 className='heading'>THE WIND IS</h1>
          <h1 className='heading'>NOT EVEN CLOSE TO US</h1>
          <p className='para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam error totam doloribus deserunt deleniti explicabo, tenetur repellat sequi laboriosam possimus ut autem. Beatae ea delectus aliquam adipisci eligendi itaque nihil odio possimus, perferendis cum, autem nostrum mollitia enim quidem aliquid voluptates ipsum eaque, nesciunt voluptatum asperiores quis. Ipsa, numquam recusandae.</p>
          <button className='buy'>Buy Car</button>
        </div>

        <div className="homeimg">
          <div className="background">
            <img className='car' src="./car.png" alt="car..." />
          </div>
        </div>
      </div>

      <div className='list'>
      {
          cardata.map((item, ind) => {
            return (
              <div className='box' key={ind}>
                <img className='carlist' src={item.img} alt='loading...' />
                <p className='company'>{item.name} <span className='price'>{item.price} rs</span></p>
                <p className='type'>{item.type}</p>
                <p className='model'>{item.model}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default page;


