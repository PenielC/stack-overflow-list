import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { IFullUser } from '../../interfaces/customTypes';
import Box from '@mui/material/Box';
import CheckIcon from '@mui/icons-material/Check';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import './usersListTable.css';
import Collapse from '@mui/material/Collapse';
import ToggleButton from '@mui/material/ToggleButton';
import Badge from '@mui/material/Badge';

interface Props {
    row: IFullUser;
}

const UsersListRow: React.FC<Props> = ({row}) => {

    const [open, setOpen] = React.useState(false);
    const [followSelected, setFollowSelected] = React.useState(false);
    const [blockSelected, setBlockSelected] = React.useState(false);
    const [following, setFollowing] = React.useState(false);
    const [block, setBlock] = React.useState(false);

    const handleFollowClicked = (value: boolean) => {
        setFollowing(value);
    }

    const handleBlockClicked = (value: boolean) => {
        setBlock(value);
    }

    React.useEffect(() => {
        followSelected ? handleFollowClicked(true) : handleFollowClicked(false);
    }, [followSelected]);

    React.useEffect(() => {
        blockSelected ? handleBlockClicked(true) : handleBlockClicked(false);
        setOpen(false);
    }, [blockSelected]);
    
  
    return (
      <React.Fragment>
        <TableRow className={ block ? 'disabled-row' : '' } sx={{ '& > *': { borderBottom: 'unset' } }} onClick={() => setOpen(!open)}>
          <TableCell>
          {<img className='imgWidth' src={`${row.profile_image}`} alt="profile" 
                          />}
          </TableCell>
          <TableCell component="th" scope="row">
            {row.display_name}
          </TableCell>
          <TableCell>{row.reputation}</TableCell>
          <TableCell scope="row">
            { following && <Badge badgeContent='following' color="secondary"></Badge>}
         </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Table size="small" aria-label="purchases">
                  <TableBody>
                      <TableRow key={row.user_id}>
                        <TableCell component="th" scope="row">
                          <ToggleButton
                              className='toggleMargin'
                              value="check"
                              selected={followSelected}
                              onChange={() => {
                                  setFollowSelected(!followSelected);
                              }}
                          >
                          <CheckIcon /> {followSelected ? 'Unfollow' : 'Follow'}
                          </ToggleButton>
                          <ToggleButton
                              value="check"
                              selected={blockSelected}
                              onChange={() => {
                                  setBlockSelected(!blockSelected);
                              }}
                              >
                              <BlockOutlinedIcon /> Block 
                          </ToggleButton>
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
export default UsersListRow;