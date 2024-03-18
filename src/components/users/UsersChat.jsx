import React from 'react';
import { Grid, Typography, ThemeProvider, Card, Box } from '@mui/material';
import { css } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import OwnMessageCard from "../ChatCard/OwnMessageCard"
import ReplyMessageCard from "../ChatCard/ReplyCard"

const theme = createTheme();

const Chat = () => {
  const chatData = [
    {
      imageUrl: 'https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=2048x2048&w=is&k=20&c=lOzPMobIPDUrcWRa1JRl4lyhIHBt8H18SB6sC9YXoys=',
      name: 'UserName',
      message: 'Lorem ipsum dolor',
      date: '2024-03-16',
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=2048x2048&w=is&k=20&c=lOzPMobIPDUrcWRa1JRl4lyhIHBt8H18SB6sC9YXoys=',
      name: 'UserName',
      message: 'Lorem ipsum dolor',
      date: '2024-03-16',
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=2048x2048&w=is&k=20&c=lOzPMobIPDUrcWRa1JRl4lyhIHBt8H18SB6sC9YXoys=',
      name: 'UserName',
      message: 'Lorem ipsum dolor',
      date: '2024-03-16',
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=2048x2048&w=is&k=20&c=lOzPMobIPDUrcWRa1JRl4lyhIHBt8H18SB6sC9YXoys=',
      name: 'UserName',
      message: 'Lorem ipsum dolor',
      date: '2024-03-16',
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=2048x2048&w=is&k=20&c=lOzPMobIPDUrcWRa1JRl4lyhIHBt8H18SB6sC9YXoys=',
      name: 'UserName',
      message: 'Lorem ipsum dolor',
      date: '2024-03-16',
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=2048x2048&w=is&k=20&c=lOzPMobIPDUrcWRa1JRl4lyhIHBt8H18SB6sC9YXoys=',
      name: 'UserName',
      message: 'Lorem ipsum dolor',
      date: '2024-03-16',
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=2048x2048&w=is&k=20&c=lOzPMobIPDUrcWRa1JRl4lyhIHBt8H18SB6sC9YXoys=',
      name: 'UserName',
      message: 'Lorem ipsum dolor',
      date: '2024-03-16',
    },
    {
      imageUrl: 'https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=2048x2048&w=is&k=20&c=lOzPMobIPDUrcWRa1JRl4lyhIHBt8H18SB6sC9YXoys=',
      name: 'UserName',
      message: 'Lorem ipsum dolor',
      date: '2024-03-16',
    },
  ];

  const chatItemStyle = css`
    background-color: #f0f0f0;
    border-radius: 8px;
    border-bottom: 2px solid #ccc;
  
  `;

  const cardContentStyle = css`
    display: flex;
    align-items: center;
    padding: 16px;
  `;

  // const textStyle = css`
  //   flex: 1;
  // `;
//   const messageTextStyle = css`
//   margin-top: 8px;
//   display: flex;
//   justift-content:center;
//   align-items:center;
// `;
  const themeProviderStyle = css`
    margin-left: 30px;
  `;

  return (
    <ThemeProvider theme={theme} css={themeProviderStyle} >
    <Grid container>
      {/* First Grid container on the left */}
      <Grid item xs={3}>
        {chatData.map((item, index) => (
          <Card key={index} css={chatItemStyle} style={{ width: '30vw', padding:'20px'}}>
             <div style={{display:'flex'}}>
              <img src={item.imageUrl} alt="Profile"  style={{ width: '50px', height: '50px', marginRight: '16px',marginBottom:'-20px',marginTop:'10px',borderRadius: '50%' }} />
               {/* <div css={textStyle}> */}
                 <Typography variant="h6" component="h3" gutterBottom  style={{marginTop:'10px', textAlign:'center'}}>
                   {item.name}
                 </Typography>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', marginLeft:'65px',marginTop:"-5px" }}>
                   <Typography variant="body2" component="p"  >
                     {item.message}
                   </Typography>
                 </div> 
               {/* </div> */}

              <div style={{display:'flex', justifyContent:'flex-end'}}>
              <Typography variant="caption" component="p">
                   Date: {item.date}
                 </Typography>
              </div>
          </Card>
        ))}
      </Grid>
      {/* Second Grid container on the right */}
       <Box
      sx={{
        height: "98%",
        // width: "100%",
        position: "absolute",
        top: 0,
        display: "flex",
        flexDirection: "column",
        padding: "1% 6%",
        gap: ".5rem",
        overflow: "auto",
      }}
    >
      <OwnMessageCard />
      <ReplyMessageCard />

      <OwnMessageCard />
      <ReplyMessageCard />
      <OwnMessageCard />
      <ReplyMessageCard />
      <OwnMessageCard />
      <ReplyMessageCard />
      <OwnMessageCard />
      <ReplyMessageCard />
      <OwnMessageCard />
      <ReplyMessageCard />
      <OwnMessageCard />
      <ReplyMessageCard />
    </Box>





















    </Grid>
  </ThemeProvider>
  );
};



export default Chat;





// return (
//   <ThemeProvider theme={theme} css={themeProviderStyle}>
//     <Grid container spacing={2}>
//       {chatData.map((item, index) => (
//         <Grid key={index} item xs={12}>
//           <Card css={chatItemStyle}  style={{width: "30%"}}>
//             <div css={cardContentStyle}>
//              <div style={{display:'flex'}}>
//              <img src={item.imageUrl} alt="Profile"  style={{ width: '50px', height: '50px', marginRight: '16px',marginBottom:'-20px',marginTop:'10px'  ,borderRadius: '50%' }} />
//               {/* <div css={textStyle}> */}
//                 <Typography variant="h6" component="h3" gutterBottom  style={{marginTop:'10px', textAlign:'center'}}>
//                   {item.name}
//                 </Typography>
//              </div>

//              <div style={{ display: 'flex', alignItems: 'center', marginLeft:'65px',marginTop:"-5px" }}>
//                   <Typography variant="body2" component="p"  >
//                     {item.message}
//                   </Typography>
//                 </div> 
//               {/* </div> */}

//              <div style={{display:'flex', justifyContent:'flex-start'}}>
//              <Typography variant="caption" component="p">
//                   Date: {item.date}
//                 </Typography>
//              </div>
//             </div>
//           </Card> 
//         </Grid>
//       ))}
//       <Card>
//         <Typography>dsfdfsdf</Typography>
//       </Card>
//     </Grid>
//   </ThemeProvider>
// );
// };