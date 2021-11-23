import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "./Components/Sidebar";
import styled from "styled-components";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, Switch } from "@material-ui/core";
import AppRoute from "./router/router";
import { emit } from "./store/emit.action";

function App() {
  // const [theme, setTheme] = useState("dark-theme");
  // const [navToggle, setNavToggle] = useState(false)
  const [checked, setChecked] = useState(false);
  const { switch_theme, nav_toggle } = useSelector((state) => state.emitReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.setAttribute('switch-theme', switch_theme)
  }, [switch_theme]);

  const themeToggler = () => {
    if (switch_theme === "light-theme") {
      dispatch(emit('THEME', 'dark-theme'))
      setChecked(false);
    } else {
      dispatch(emit('THEME', 'light-theme'))
      setChecked(true);
    }
  };

  const handleToggle = () => {
    dispatch(emit('NAV_TOGGLE', !nav_toggle))
  }

  return (
    <div className="App">
      <Sidebar navToggle={nav_toggle} />

      <div className="theme">
        <div className="light-dark-mode">
          <div className="left-content">
            <Brightness4Icon />
          </div>
          <div className="right-content">
            <Switch
              value=""
              checked={checked}
              inputProps={{ "aria-label": "" }}
              size="medium"
              onClick={themeToggler}
            />
          </div>
        </div>
      </div>

      <div className="ham-burger-menu">
        <IconButton onClick={handleToggle}>
          <MenuIcon />
        </IconButton>
      </div>

      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>
        <AppRoute />
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;
