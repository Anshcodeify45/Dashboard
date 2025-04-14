import React from 'react'
import { display, height, Stack, width } from '@mui/system'
import {Box,styled} from '@mui/system'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Grid} from '@mui/system';
import { useState } from 'react';
const DisplayProducts = styled(Box)`
 display:flex;
`
const ProductData = styled(Box)`
   border:2px solid;
`

const cardData = [
    {
      id: 1,
      title: 'iPhone 15 Pro Max',
      image: 'https://m.media-amazon.com/images/I/81SigpJN1KL._AC_UF1000,1000_QL80_.jpg',
      description: 'The most advanced iPhone with A17 chip, titanium body, and Dynamic Island.',
      price:"1,35,00",
    },
    {
      id: 2,
      title: 'Samsung Galaxy S24 Ultra',
      image: 'https://img-prd-pim.poorvika.com/prodvarval/Samsung-galaxy-s24-ultra-5g-titanium-Violet-256gb-12gb-ram-Front-Back-View-Thumbnail.png',
      description: 'Flagship Android phone with AI features, 200MP camera.',
      price:"1,25,00",
    },
    {
      id: 3,
      title: 'OnePlus 12',
      image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/s/r/r/12-5g-op12-5g-oneplus-original-imagxgt7uwerszh8.jpeg?q=20&crop=false',
      description: 'Powerful performance with Snapdragon 8 Gen 3 and fluid AMOLED display.',
      price:"50,400",
    },
    {
      id: 4,
      title: 'Pixel 8 Pro',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXAGq5NU72ioAyD8dD6aVYbMFXLB8g3YusaA&s',
      description: 'Clean Android experience with best-in-class computational photography.',
      price:"75,000",
    },
    {
      id: 5,
      title: 'Xiaomi 14 Ultra',
      image: 'https://m.media-amazon.com/images/I/81mDHujkYpL._AC_UF1000,1000_QL80_.jpg',
      description: 'Leica-powered camera system with sleek design and fast charging.',
      price:"45,000",
    },
    {
      id: 6,
      title: 'Motorola Edge 50 Ultra',
      image: 'https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-ultra.jpg',
      description: 'Curved display, vegan leather back, and great multimedia performance.',
      price:"35,000",
    },
    {
      id: 7,
      title: 'Realme GT5 Pro',
      image: 'https://fdn2.gsmarena.com/vv/bigpic/realme-gt5-pro.jpg',
      description: 'A true flagship killer with performance and affordability.',
      price:"29,000",
    },
    {
      id: 8,
      title: 'Iphone 15 plus',
      image: 'https://m.media-amazon.com/images/I/71v2jVh6nIL._AC_UF1000,1000_QL80_.jpg',
      description: 'Ultimate gaming phone with high refresh rate and AirTriggers.',
      price:"1,24,000",
    },
  ]
  

function ProductPage() {
    const [selectedCard, setSelectedCard] = useState(cardData[0])

  return (
    <Box style={{paddingLeft:10}}>
       <Box height={50}/>
       <Box>
       <Stack direction="row" spacing={2}>
        <Box>
        <Grid container spacing={2}>
      {/* Small Cards */}
      <Stack  direction="row" spacing={2}>
      <Grid item xs={12} md={4}>
        <Grid container spacing={2}>
          {cardData.map((card) => (
            <Grid item xs={12} key={card.id}>
              <Card onClick={() => setSelectedCard(card)} sx={{ 
                width: 200, 
                height: 300, // fixed height 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                backdropFilter: 'blur(10px)',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px'}}>
                  <CardMedia 
                   component="img"
                   image={card.image}
                   alt={card.title}
                    sx={{
                        height: 160,         // consistent image height
                        width: '100%',       // fills the card width
                        objectFit: 'contain', // keeps full image in view (use "cover" if you want it to crop nicely)
                        padding: '10px'       // optional spacing
                      }}/>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" noWrap sx={{ minWidth: '15px',color:"white",marginLeft:4 }}>{card.title}</Typography>
                    <Typography gutterBottom variant="p" component="div" noWrap sx={{ minWidth: '15px',color:"white",marginLeft:6 }}>${card.price}</Typography>
                    <Button variant='contained' style={{marginLeft:45,background: 'linear-gradient(135deg, #090933, #1a1541, #51218c)',
                    color: '#fff',
                    padding: '10px 20px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 15px rgba(81, 33, 140, 0.5)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #1a1541, #51218c, #090933)',
                      boxShadow: '0 6px 20px rgba(81, 33, 140, 0.7)',
                    }
                }}>Add</Button>
                  </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Large Detailed Card */}
      <Grid>
        {selectedCard ? (
          <Card sx={{ width: '300px', // Fixed width
                      height: '550px', // Fixed height
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '16px',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 0 10px rgba(176, 132, 249, 0.3)',
                      color: '#E0D7F7' ,
                      marginRight:15}}>
            <CardMedia component="img"  image={selectedCard.image} alt={selectedCard.title} 
            sx={{ objectFit: 'contain',
              borderRadius: '12px 12px 0 0' ,width:"250px",height:"240px",margin:"45px 32px"}}/>
            <CardContent>
              <Typography variant="h5" gutterBottom>{selectedCard.title}</Typography>
              <Typography variant="p">{selectedCard.price}</Typography>
              <Typography variant="body1">{selectedCard.description}</Typography>
              <Button variant='contained' style={{width:"80%",marginLeft:25,marginTop:15,
                    background: 'linear-gradient(135deg, #090933, #1a1541, #51218c)',
                    color: '#fff',
                    padding: '10px 20px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 15px rgba(81, 33, 140, 0.5)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #1a1541, #51218c, #090933)',
                      boxShadow: '0 6px 20px rgba(81, 33, 140, 0.7)',
                    }
                
              }}>Add</Button>
            </CardContent>
          </Card>
        ) : (
          <Typography variant="h6" color="text.secondary">
            Click a card to view details.
          </Typography>
        
        )}
        
      </Grid>
      </Stack>
    </Grid>
        </Box>
        </Stack>
       </Box>
       <Box height={130}/>
  </Box>
  )
}

export default ProductPage
