import './List.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({url}) => {
  
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if(response.data.success){
      setList(response.data.data);
    }
    else{
      toast.error(response.data.message);
    }
  }
  
  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove/`,{id:foodId});
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message);
    }
    else{
      toast.error(response.data.message);
    }
  }
   

  useEffect(() => {
    fetchList();
  }, [url]);



  return (
    <div className='list add flex-col'>

      <p>All food list</p>
      <div className='list-table'>
        <div className='list-table-format title'>
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {
          list.map((item,index) => {
            return(
              <div key={index} className='list-table-format'>
                <img src={`${url}/images/$item.image`} alt={item.image}/>
                <p>{item.name}</p>
                <p>{item.description}</p>
                <p>{item.category}</p>
                <p>${item.price}</p>
                <p onClick={() => removeFood(item._id)} className='cursor'>x</p>
              </div>
            )
          }   
          )
        }
      </div>
    </div>
  );
};

export default List
