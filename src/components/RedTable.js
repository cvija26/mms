import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableContainer from "@material-ui/core/TableContainer";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import React from "react";
import NestedModal from "./NestedModal";
import "../styles/RedTable.css";
  
const styles={
    cell:{
      backgroundColor:'#262254',borderBottom:"3px solid aqua",borderRight:"3px solid aqua",color:'aqua',fontSize:"9px"
    },
    cellNoBorder:{backgroundColor:'#262254',borderBottom:"3px solid aqua",color:'aqua', fontSize:"9px"},
    bodyCell:{borderBottom:"none",borderRight:"3px solid aqua",color:"white",fontSize:"9px"
  
    },
    bodyCellNoBorder:{
      borderBottom:"none",color:"white", fontSize:"9px"
    }
  };

export default function RedTable(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openFromParent() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    
    setIsOpen(false);
  }
return(<div><TableContainer  style={{  backgroundColor:'#262254',
    marginBottom:30, borderRadius:10,width:'90%',height:'35vh' }} component={Paper}>
    <p className="title-red">Status prekršaja: crveni - spreman za manuelnu obradu i verifikaciju</p>
      <Table    aria-label="simple table" stickyHeader>
      
        <TableHead >
       
        
          <TableRow style={{cursor: "default"}}>
          
            <TableCell size="small" style={styles.cell} align="center">STATUS</TableCell>
            <TableCell  style={styles.cell} align="center">BRZINA</TableCell>
            <TableCell  style={styles.cell} align="center">VRIJEME</TableCell>
            <TableCell  style={styles.cell} align="center"><p style={{width: 200}}>REGISTARSKA OZNAKA RADARA</p></TableCell>
            <TableCell style={styles.cellNoBorder} align="center">PREKORAČENJE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ }}>
          {props.data.map((row) => (
            <TableRow  hover onClick={openFromParent}
           key={row.id}  >
              <TableCell width="10%" style={styles.bodyCell} align="center" component="th" scope="row">
                <img className="status-logo" src="./img/red.svg" alt="red"/>
              </TableCell>
              <TableCell style={styles.bodyCell} align="center">60</TableCell>
              <TableCell style={styles.bodyCell} align="center">31.03.2022 08:50:15 </TableCell>
              <TableCell style={styles.bodyCell} align="center">J83A977</TableCell>
              <TableCell style={styles.bodyCellNoBorder} align="center">20</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <NestedModal IsModalOpened={modalIsOpen}
    onCloseModal={handleCloseModal}/>
    </div>
)
          }