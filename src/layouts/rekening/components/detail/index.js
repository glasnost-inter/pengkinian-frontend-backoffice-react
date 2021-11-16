/**
=========================================================
* Soft UI Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
// import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SuiButton from "components/SuiButton";

function Detail({ namabank, norekening, pemilikrekening, cabangbank, noGutter }) {
  return (
    <SuiBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      backgroundColor="grey-100"
      borderRadius="lg"
      p={3}
      mb={noGutter ? 0 : 1}
      mt={2}
    >
      <SuiBox width="100%" display="flex" flexDirection="column">
        <SuiBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
          mb={2}
        >
          <SuiTypography variant="button" fontWeight="medium" textTransform="capitalize">
            {namabank}
          </SuiTypography>
        </SuiBox>
        <SuiBox mb={1} lineHeight={0}>
          <SuiTypography variant="caption" textColor="text">
            No Rekening:&nbsp;&nbsp;&nbsp;
            <SuiTypography variant="caption" fontWeight="medium" textTransform="capitalize">
              {norekening}
            </SuiTypography>
          </SuiTypography>
        </SuiBox>
        <SuiBox mb={1} lineHeight={0}>
          <SuiTypography variant="caption" textColor="text">
            Pemilik Rekening:&nbsp;&nbsp;&nbsp;
            <SuiTypography variant="caption" fontWeight="medium">
              {pemilikrekening}
            </SuiTypography>
          </SuiTypography>
        </SuiBox>
        <SuiTypography variant="caption" textColor="text">
          Cabang Bank :&nbsp;&nbsp;&nbsp;
          <SuiTypography variant="caption" fontWeight="medium">
            {cabangbank}
          </SuiTypography>
        </SuiTypography>
      </SuiBox>
    </SuiBox>
  );
}

// Setting default values for the props of Bill
Detail.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Bill
Detail.propTypes = {
  namabank: PropTypes.string.isRequired,
  norekening: PropTypes.string.isRequired,
  pemilikrekening: PropTypes.string.isRequired,
  cabangbank: PropTypes.string.isRequired,
  noGutter: PropTypes.bool,
};

export default Detail;
