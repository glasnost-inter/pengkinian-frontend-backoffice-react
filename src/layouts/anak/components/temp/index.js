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

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

// Billing page components
// import Bill from "layouts/billing/components/Bill";
import Biodata from "layouts/penerima-manfaat/components/biodata";

function BillingInformation() {
  return (
    <Card id="delete-account">
      <SuiBox pt={3} px={2}>
        <SuiTypography variant="h6" fontWeight="medium">
        Penerima Manfaat Temp
        </SuiTypography>
      </SuiBox>
      <SuiBox pt={1} pb={2} px={2}>
        <SuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Biodata
            nama="oliver james"
            tempatlahir="semarang"
            tgllahir="14/11/2004"
            tglmeninggal=""
            noGutter
          />
          <Biodata
            nama="lucas james"
            tempatlahir="jogjakarta"
            tgllahir="14/11/2005"
            tglmeninggal=""
            noGutter
          />
          <Biodata
            nama="liam james"
            tempatlahir="surabaya"
            tgllahir="14/11/2006"
            tglmeninggal=""
            noGutter
          />
        </SuiBox>
        <SuiBox component="form" role="form">
          <SuiBox mb={2}>
            <SuiBox mb={1} ml={0.5}>
              <SuiTypography component="label" variant="caption" fontWeight="bold">
                Komentar
              </SuiTypography>
            </SuiBox>
            <SuiInput type="text" placeholder="Komentar" />
          </SuiBox>
          <SuiBox mt={4} mb={1}>
            <SuiButton
              variant="gradient"
              buttonColor="info"
              component={Link}
              to="#"
              fullWidth>
              Komentar
            </SuiButton>
          </SuiBox>
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

export default BillingInformation;
