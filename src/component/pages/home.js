import React, { useEffect, useState,Suspense } from 'react';
import { useLoaderData } from 'react-router-dom';
const Banner= React.lazy(()=>import('../banner'));
const Products =React.lazy( ()=>import('../Products'));

function Home() {
  const [products, setProducts] = useState([]); // Initialize products state with an empty array

  const data = useLoaderData();

  useEffect(() => {
    if (data && data.data) {
      setProducts(data.data); // Update products state when data changes
    }
  }, [data]);

  return (
    <div>
      <Suspense fallback={<p>Loading</p>}> 
         <Banner />
      </Suspense>
      <Suspense fallback={<p>Loading</p>}>

      <Products products={products} /> {/* Pass products as props to Products component */}
      </Suspense>

    </div>
  );
}

export default Home;
