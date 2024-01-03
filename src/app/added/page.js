import './added.css';
import Link from 'next/link';
import Delete from '@/lib/Delete';

async function data() {
  let data = await fetch("http://localhost:3000/api/car", {cache:"no-cache"});
  data = await data.json();
  return data.result;
}

const page = async () => {

  const dbdata = await data();

  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Type</th>
            <th>Model</th>
            <th>Update/Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            dbdata.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.type}</td>
                  <td>{item.model}</td>
                  <td>
                    <Link href='/added/add' className='ed'>Add</Link>
                    <Link href={`/added/${item._id}`} className='ed'>Edit</Link>
                    <Delete id={item._id} />
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default page;
