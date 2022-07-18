import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {currentUser} from "../requestMethods"; 
import {logout } from "../redux/userRedux";
import { useDispatch } from "react-redux";

import SearchBar from "./SearchBar.js";


const Container = styled.div`
  height: 60px;
  ${mobile({ height: "20px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  z-index: 100;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "15px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity)
  const dispatch=useDispatch();
  
  return (
    <Container>
      <Wrapper>
        
        <Left>
        <MenuItem><SearchBar placeholder="Search for anything..." /></MenuItem>
            
        </Left>
        
        <Center>
          <Logo>E-Shop</Logo>
        </Center>
        <Right>
        {(currentUser && currentUser.isAdmin) ?
(<Link to="/admin">
<MenuItem style={{marginTop:"15px"}}>admin</MenuItem>
</Link>) : (undefined)

        }
        {!currentUser ? (<Link to="/login">
          <MenuItem style={{marginTop:"15px"}}>SIGN IN</MenuItem>
          </Link>):(<Link to="/login" onClick={()=>dispatch(logout())}>
          <MenuItem  style={{marginTop:"15px"}}>LogOut</MenuItem>
          
          </Link>)}
          
          {!currentUser ? (<Link to="/register">
          <MenuItem style={{marginTop:"15px"}}>REGISTER</MenuItem>
        </Link>):(undefined)}
          
          <Link to="/cart">
            <MenuItem  style={{marginTop:"10px"}}>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;