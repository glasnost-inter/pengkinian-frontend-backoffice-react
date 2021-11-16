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

function Biodata({ nama, tempatlahir, tgllahir, tglmeninggal, noGutter }) {
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
            {nama}
          </SuiTypography>
        </SuiBox>
        <SuiBox mb={1} lineHeight={0}>
          <SuiTypography variant="caption" textColor="text">
            Tempat Lahir:&nbsp;&nbsp;&nbsp;
            <SuiTypography variant="caption" fontWeight="medium" textTransform="capitalize">
              {tempatlahir}
            </SuiTypography>
          </SuiTypography>
        </SuiBox>
        <SuiBox mb={1} lineHeight={0}>
          <SuiTypography variant="caption" textColor="text">
            Tanggal Lahir:&nbsp;&nbsp;&nbsp;
            <SuiTypography variant="caption" fontWeight="medium">
              {tgllahir}
            </SuiTypography>
          </SuiTypography>
        </SuiBox>
        <SuiTypography variant="caption" textColor="text">
          Tgl Meninggal :&nbsp;&nbsp;&nbsp;
          <SuiTypography variant="caption" fontWeight="medium">
            {tglmeninggal}
          </SuiTypography>
        </SuiTypography>
      </SuiBox>
    </SuiBox>
  );
}

// Setting default values for the props of Bill
Biodata.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Bill
Biodata.propTypes = {
  nama: PropTypes.string.isRequired,
  tempatlahir: PropTypes.string.isRequired,
  tgllahir: PropTypes.string.isRequired,
  tglmeninggal: PropTypes.string.isRequired,
  noGutter: PropTypes.bool,
};

export default Biodata;
