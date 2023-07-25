// const CodeforInterview=()=>{
//     return (
//         // <p>Hello from CodeforInterview</p>
//         <img src={logo} alt="Logo" />
//     )
// }
// export default CodeforInterview;

import { Box, Typography, styled } from '@mui/material';

import Youtube from '../Assets/Images/annie.jpg';
import InstaTele from '../Assets/Images/juho.jpg';

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Image = styled('img')({
    width: '50%',
    height: '50%'
});

const CodeForInterview = () => {

    return (
        <Header>
            <Typography variant="h4">Welcome in coding Duniya!</Typography>
            <Box style={{display: 'flex'}}>
                <Image src={Youtube} />
                <Image src={InstaTele} />
            </Box>
        </Header>
    )
}

export default CodeForInterview;