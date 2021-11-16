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

function Detail({ alamatdomisili, kota, kodepos, telepon, nohp, email, noGutter }) {
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
            {alamatdomisili}
          </SuiTypography>
        </SuiBox>
        <SuiBox mb={1} lineHeight={0}>
          <SuiTypography variant="caption" textColor="text">
            Kota:&nbsp;&nbsp;&nbsp;
            <SuiTypography variant="caption" fontWeight="medium" textTransform="capitalize">
              {kota}
            </SuiTypography>
          </SuiTypography>
        </SuiBox>
        <SuiBox mb={1} lineHeight={0}>
          <SuiTypography variant="caption" textColor="text">
            Kode Post:&nbsp;&nbsp;&nbsp;
            <SuiTypography variant="caption" fontWeight="medium">
              {kodepos}
            </SuiTypography>
          </SuiTypography>
        </SuiBox>
        <SuiTypography variant="caption" textColor="text">
          Telepon :&nbsp;&nbsp;&nbsp;
          <SuiTypography variant="caption" fontWeight="medium">
            {telepon}
          </SuiTypography>
        </SuiTypography>
        <SuiTypography variant="caption" textColor="text">
          No HP :&nbsp;&nbsp;&nbsp;
          <SuiTypography variant="caption" fontWeight="medium">
            {nohp}
          </SuiTypography>
        </SuiTypography>
        <SuiTypography variant="caption" textColor="text">
          Email :&nbsp;&nbsp;&nbsp;
          <SuiTypography variant="caption" fontWeight="medium">
            {email}
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
  alamatdomisili: PropTypes.string.isRequired,
  kota: PropTypes.string.isRequired,
  kodepos: PropTypes.string.isRequired,
  telepon: PropTypes.string.isRequired,
  nohp: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  noGutter: PropTypes.bool,
};


export default Detail;
