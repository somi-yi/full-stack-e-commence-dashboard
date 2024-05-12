import {
  GridColumnMenuContainer,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";

const CustomColumnMenu = (props) => {
  const { hideMenu, currentColumn, open } = props;
  return (
    <GridColumnMenuContainer
      hideMenu={hideMenu}
      currentColumn={currentColumn}
      open={open}
    >
      <GridToolbarFilterButton onClick={hideMenu} column={currentColumn} />
      <GridToolbarFilterButton onClick={hideMenu} column={currentColumn} />
    </GridColumnMenuContainer>
  );
};

export default CustomColumnMenu;
