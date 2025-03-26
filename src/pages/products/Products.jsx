import { useState } from "react";
import "./products.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";

import { products } from "../../data";

const columns = [
  { field: "id", headerName: "ID", width: 70 }, // Reduced from 90px
  {
    field: "img",
    headerName: "Image",
    width: 80, // Reduced from 100px
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 200, // Reduced from 250px
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 120, // Reduced from 150px
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 120, // Reduced from 200px
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 150, // Reduced from 200px
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 150, // Reduced from 200px
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 100, // Reduced from 150px
    type: "boolean",
  },
];
const Products = () => {
  const [open, setOpen] = useState(false);

  // TEST THE API

  // const { isLoading, data } = useQuery({
  //   queryKey: ["allproducts"],
  //   queryFn: () =>
  //     fetch("http://localhost:8800/api/products").then(
  //       (res) => res.json()
  //     ),
  // });

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New Products</button>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="products" columns={columns} rows={data} />
      )} */}
      {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Products;
