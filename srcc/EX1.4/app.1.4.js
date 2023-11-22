import "typeface-roboto"
import React from "react";
import FormGroup from "@mui/material/FormGroup";
import MySelect from "./MySelect";
import MyTextInput from "./MyTextInput";

export default function App() {
 return (
   <FormGroup style={{ width: 200, margin: 10 }}>
     <MyTextInput />
     <MySelect/>
   </FormGroup>
 );
}
