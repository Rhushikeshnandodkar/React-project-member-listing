import styled from "styled-components";

export const NavbarStyle = styled.div`
    .navbar-section{
        padding: 1%;
        border-bottom: 1px solid lightgray;
    }
    .navbar{
        background-color: white;
        display: flex;
        justify-content: space-between;
        width: 80%;
        margin: auto;
        align-items: center;
    }
    .navbar .logo-section{
        font-size: 1rem;
    }
    .links ul{
        list-style: none;
        display: flex;
    }
    .links ul li{
        margin-right: 12%;
    }
    .links ul li a{
        color: black;
        text-decoration: none;
        font-size: 1.1rem;
    }
`;

export const CardStyle = styled.div`
    .single-product-card{
    margin: 3%;
    text-align: center;
    width: 400px;
    /* padding: 2%; */
    border: 1px solid rgba(128, 128, 128, 0.322);
}
.single-product-card h3{
    font-size: 1.4rem;
    font-weight: 400;
    margin: 4%;
}
.single-product-card p{
    font-size: 1.1rem;
    font-weight: 400;
    margin-bottom: 3%;
    padding: 0 5%;
}
.btn{
    margin-bottom: 6%;
}
.single-product-card img{
    width: 400px;
    height: 30vh;
    object-fit: cover;
}
.btn{
    background-color: rgb(0, 110, 255);
    padding: 1% 4%;
    margin-top: 1%;
    border: none;
    cursor: pointer;
    border-radius: 2px;
}
.btn a{
    color: white;
    font-size: 1.2rem;
    text-decoration: none;
}
`;

export const LoaderStyle = styled.div`
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin: 10% auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`; 