import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState,useEffect } from 'react';
import { Button,Box } from '@mui/material';
import { db } from '../../FireBase-config';
import {deleteDoc,doc} from 'firebase/firestore'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import Swal from 'sweetalert2'
import {TextField} from '@mui/material';
import {Autocomplete} from '@mui/material';
import { collection } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {Stack} from '@mui/material';
import {Typography} from '@mui/material';
import Modal from '@mui/material/Modal';
import Addproduct from './Addproduct';
import Editproduct from './Editproduct';
import { useAppstore } from '../Appstore';
import Skeleton from '@mui/material/Skeleton';
import { color } from '@mui/system';




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };



export default function ProductList() {
  const [page, setPage] = useState(0);
  const [formid, setFormid] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const setRows = useAppstore((state) => state.setRows);
  const rows = useAppstore((state) => state.rows);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [editopen ,setEditOpen]=useState(false);
  const handleEditOpen = () => setEditOpen(true);
  const handleClose = () => setOpen(false);
  const handleEditClose = () => setEditOpen(false)
  const empCollectionRef = collection(db,"products");
  console.log("Firestore Collection Reference:", empCollectionRef);


  

  useEffect(()=>{
    getUsers();
  },[])

//   const getUsers = async () => {
//     try {
//       const querySnapshot = await getDocs(empCollectionRef);
  
//       // Check if Firestore returns any documents
//       if (querySnapshot.empty) {
//         console.log("No documents found in Firestore ❌");
//       } else {
//         console.log("Documents found ✅");
//         querySnapshot.forEach((doc) => {
//           console.log(`Document ID: ${doc.id}`, doc.data()); // Log each document
//         });
//       }
  
//       // Store in state
//       setRows(querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data()
//       })));
//     } catch (error) {
//       console.error("Error fetching data from Firestore:", error);
//     }
//   };


  const getUsers = async () => {
    try {
      const querySnapshot = await getDocs(empCollectionRef);
  
      if (querySnapshot.empty) {
        console.log("No documents found in Firestore ❌");
      } else {
        console.log("Documents found ✅");
      }
  
      // Ensure rows are reset before setting new data
      setRows([]); // ✅ Clears old data before updating state
  
      setRows(querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      })));
    } catch (error) {
      console.error("Error fetching data from Firestore:", error);
    }
  };
  useEffect(() => {
    console.log("Updated Rows:", rows); // Log the updated state
  }, [rows]);

 //delete event
    const deleteUser = (id) => {
        Swal.fire({
            title:"Are you sure?",
            text:"You won't be able to revert this!",
            icon:"warning",
            showCancelButton:true,
            confirmButtonColor:"#3085d6",
            cancelButtonColor:"#d33",
            confirmButtonText:"Yes"
        }).then((result) => {
            if(result.value){
                deleteApi(id);
            }
        })
    }
 //filter data
//  const filterData = (selectedProduct) => {
//     if (selectedProduct) {
//       setRows(rows.filter((row) => row.id === selectedProduct.id));
//     } else {
//        setRows([]); 
//       getUsers(); // Reset when input is cleared
//     }
//   };

  const filterData = (selectedProduct) => {
    if (selectedProduct) {
      setRows(rows.filter((row) => row.id === selectedProduct.id));
    } else {
        setRows([]);
      getUsers(); // ✅ Reload original data when search is cleared
    }
  };


  //Edit Data
    const editData = (id,Name,Price,Category) =>{
        const data ={
            id:id,
            name:Name,
            price:Price,
            category:Category,
        }
        setFormid(data);
        handleEditOpen();
    }

  //Delete Data
    const deleteApi = async(id) => {
        const userDoc = doc(db,"products",id);
        await deleteDoc(userDoc);
        Swal.fire("Deleted", "Your file has been deleted","success")
        await getUsers();
    }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
    <div >
      
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Addproduct closeEvent={handleClose}/>
        </Box>
      </Modal>

      <Modal
        open={editopen}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Editproduct closeEvent={handleEditClose} fid={formid}/>
        </Box>
      </Modal>
    </div>
    <Paper sx={{ width: '100%', overflow: 'hidden' }} style={{ backgroundColor:'#505081',color:"white"}}>
        <Stack direction="row" spacing={2} style={{paddingTop:15,paddingBottom:15,paddingLeft:15 ,alignItems:"center",color:"white"}}>
            <Autocomplete disablePortal
                          id="combo-box-demo"
                          options={rows}
                          sx={{width: 300}}
                          onChange={(e,v) => filterData(v || null)}
                          getOptionLabel = {(rows) => rows.Name || ""}
                          renderInput = {
                            (params) => (
                                <TextField {...params} size="small" label="Search Products" style={{backgroundColor:'#31316B'}}/>
                            )
                          }
            />
            <Typography variant="h6" sx={{flexGrow:1}}>
                <Button style={{marginLeft:500}}   variant='contained' endIcon={<AddCircleIcon/>} onClick={handleOpen}>Add</Button>
            </Typography>
        </Stack>
      <TableContainer sx={{ maxHeight: 440 }} style={{ backgroundColor:'#505081',color:"white"}}>
        <Table stickyHeader aria-label="sticky table" >
          <TableHead>
            <TableRow>
                <TableCell
                  align="left"
                  style={{ minWidth: "100px",backgroundColor:"#31316B",color:"white"}}
                 
                >
                  Name
                </TableCell>
                <TableCell
                  align="left"
                  style={{ minWidth: "100px",backgroundColor:"#31316B",color:"white"}}
                >
                  Category
                </TableCell>
                <TableCell
                  align="left"
                  style={{ minWidth: "100px",backgroundColor:"#31316B",color:"white"}}
                >
                  Price
                </TableCell>
                <TableCell
                  align="left"
                  style={{ minWidth: "100px",backgroundColor:"#31316B",color:"white"}}
                >
                  Date
                </TableCell>
                <TableCell
                  align="left"
                  style={{ minWidth: "100px",backgroundColor:"#31316B",color:"white"}}
                >
                  Edit
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                    <TableRow key={index} hover role="checkbox" >
                    <TableCell align="left" style={{color:"white",borderColor:'#9D9DCC'}}>{row.Name}</TableCell>
                    <TableCell align="left" style={{color:"white",borderColor:'#9D9DCC'}}>{row.Category}</TableCell>
                    <TableCell align="left" style={{color:"white",borderColor:'#9D9DCC'}}>{row.Price}</TableCell>
                    <TableCell align="left" style={{color:"white",borderColor:'#9D9DCC'}}>{row.Date}</TableCell>
                    <TableCell align="left" style={{color:"white",borderColor:'#9D9DCC'}}>
                        <Stack spacing={2} direction="row">
                        <EditIcon style={{ fontSize: "20px", color: "blue", cursor: "pointer" }} 
                               onClick = { () => {
                                        editData(row.id,row.Name,row.Price,row.Category)
                                }
                               } 
                        />
                        <DeleteIcon style={{ fontSize: "20px", color: "darkred", cursor: "pointer" }} 
                                    onClick={() => deleteUser(row.id)} />
                        </Stack>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>

        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage} 
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        style={{backgroundColor:"#31316B",color:"white"}}
      />
    </Paper>
    {
                    rows.length == 0 &&(
                        <>
                        <Paper sx={{width:"98%",overflow:"hidden",padding:"12px"}}>
                          <Box height={20}/>
                          <Skeleton variant="rectangular" width={"100%"} height={30} /> 
                          <Box height={40}/>
                          <Skeleton variant="rectangular" width={"100%"} height={60} />
                          <Box height={20}/>
                          <Skeleton variant="rectangular" width={"100%"} height={60} /> 
                          <Box height={20}/>
                          <Skeleton variant="rectangular" width={"100%"} height={60} />
                          <Box height={20}/>
                          <Skeleton variant="rectangular" width={"100%"} height={60} />
                          <Box height={20}/>
                          <Skeleton variant="rectangular" width={"100%"} height={60} />
                        </Paper>
                        </>
                    )
    }
    </>
  );
}