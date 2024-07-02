import React, { useEffect, useState } from 'react';
import Banner from '../banner';
import Products from '../Products';
import { useLoaderData } from 'react-router-dom';

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
      <Banner />
      <Products products={products} /> {/* Pass products as props to Products component */}
    </div>
  );
}

export default Home;
