// import React from 'react'
// import "./add.scss"

// type Props = {
//     slug: string;
//     columns: GridColDef[];
//     setOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   };
  

// const Add = (props) => {
//   return (
//     <div className="add">
//         <div className="modal">
//             <span className='close' onClick={()=>props.setOpen(false)}>x</span>
//             <h1>Add new {props.slug}</h1>
//             <form onSubmit={handleSubmit}>
//           {props.columns
//             .filter((item) => item.field !== "id" && item.field !== "img")
//             .map((column) => (
//               <div className="item">
//                 <label>{column.headerName}</label>
//                 <input type={column.type} placeholder={column.field} />
//               </div>
//             ))}
//           <button>Send</button>
//         </form>
//         </div>
//     </div>
//   )
// }

// export default Add

// Add.jsx
import React from "react";
import "./add.scss";

const Add = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the form data for now (you can replace this with actual submission logic)
    const formData = new FormData(e.target);
    const data = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
    console.log("Form submitted:", data);
    props.setOpen(false); // Close the modal after submission
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          x
        </span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item" key={column.field}>
                <label>{column.headerName}</label>
                <input
                  type={column.type === "boolean" ? "checkbox" : "text"}
                  name={column.field} // Add name attribute for form submission
                  placeholder={column.field}
                />
              </div>
            ))}
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;