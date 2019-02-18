import styled from "@emotion/styled";

const Container = styled.div`
  /* NAV -------------------------------------------------------------------------------------------------- */
  nav {
    background: #fefdfa;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 80px;
    height: 80px;
    width: 100vw;
    z-index: 10;
    position: fixed;
    top: 0;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16), 0 1px 2px rgba(0, 0, 0, 0.23);
  }

  .links {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: 350px;
  }

  .navlink {
    border: 1px solid #fefdfa;
    padding: 5px 15px;
    border-radius: 3px;
    transition: all 0.2s;
    text-align: center;
    color: #123;
    width: 100px;
  }

  .navlink:hover {
    border: 1px solid #00ab6b;
    color: #00ab6b;
    background: #fefdfa;
  }

  #logo {
    margin-bottom: 50px;
    margin-left: 30px;
    color: #00ab6b;
    font-family: "Expletus Sans", cursive;
    font-size: 40px;
    margin: 0;
  }

  /* HOME -------------------------------------------------------------------------------------------------- */

  #home,
  #about,
  #register,
  #error {
    margin-top: 80px;
    padding: 0 80px;
    position: absolute;
    width: 100%;
  }

  #home {
    background-position: 100% 33%;
    background-size: 100% auto;
    height: 89.3vh;
  }

  .hero {
    font-family: "Libre Baskerville", serif;
    font-size: 45px;
    font-weight: bold;
    margin: 60px 0 50px 0;
  }

  h4 {
    font-size: 20px;
    margin-bottom: 20px;
    width: 60%;
    line-height: 25px;
  }

  #signup {
    margin-top: 75px;
    width: 250px;
    border-radius: 50px;
    background: #00ab6b;
    padding: 15px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  #signup:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  a {
    color: white;
    text-decoration: none;
  }

  #signup-button {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  #learn-more {
    font-size: 14px;
    display: inline-block;
    color: #00ab6b;
    margin: 20px 35px;
    padding-bottom: 5px;
    transition: all 0.3s;
  }

  #learn-more:hover {
    border-bottom: 2.5px solid #00ab6b;
  }

  .fab {
    font-size: 20px;
  }

  /* ABT / REGISTER / ERR -------------------------------------------------------------------------------------------------- */

  .italic {
    font-style: italic;
  }

  #about,
  #register,
  #error {
    background-color: #e2e6e5;
    padding-bottom: 50px;
  }

  #error {
    height: 89.2vh;
  }

  ol {
    list-style-type: decimal;
    padding: 0 20px;
    margin-bottom: 80px;
    font-size: 20px;
  }

  li {
    padding-left: 20px;
    margin-bottom: 20px;
  }

  mark {
    background: #5cffa0;
    border-radius: 3px;
    padding: 0px 3px;
  }

  .href {
    color: #00ab6b;
    border-bottom: 2px solid #e2e6e5;
    transition: all 0.3s;
  }

  .href:hover {
    border-bottom: 2px solid #00ab6b;
  }

  /* FORM -------------------------------------------------------------------------------------------------- */

  form {
    margin: 60px 0 50px 0;
    font-family: "Lato", sans-serif;
    display: flex;
    flex-flow: column nowrap;
  }

  form input[type="email"] {
    padding: 20px 10px;
    border: 2px solid #e2e6e5;
    border-bottom: 2px solid #123;
    background: transparent;
    color: #123;
    font-size: 20px;
    height: 50px;
    width: 500px;
  }

  form input[type="email"]:focus,
  input[type="email"]:hover {
    outline: none;
    border-bottom: 2px solid #00ab6b;
    transition: all 0.3s;
  }

  form input[type="submit"] {
    margin-top: 75px;
    width: 250px;
    border-radius: 50px;
    border: transparent;
    background: #00ab6b;
    color: white;
    font-size: 16px;
    text-decoration: none;
    padding: 15px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  form input[type="submit"]:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export default Container;