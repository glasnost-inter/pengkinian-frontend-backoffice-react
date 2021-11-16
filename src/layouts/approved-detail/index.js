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

// import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
// import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
// import SuiTypography from "components/SuiTypography";
// import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

// Soft UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import Table from "examples/Table";

import PenerimaManfaatDefinitif from "layouts/penerima-manfaat/components/definitif";

import SuamiIstriDefinitif from "layouts/suami-istri/components/definitif";

import AnakDefinitif from "layouts/anak/components/definitif";

import KorespondensiDefinitif from "layouts/korespondensi/components/definitif";

import RekeningDefinitif from "layouts/rekening/components/definitif";

// import Separator from "layouts/authentication/components/Separator";

// Custom styles for the Tables
// import styles from "layouts/tables/styles";

// Data
// import waitingApproveData from "layouts/waiting-approve-detail/data/waitingApproveData";
// import projectsTableData from "layouts/tables/data/projectsTableData";

function ApprovedDetail() {
  // const classes = styles();
  // const { columns, rows } = waitingApproveData;
  // const { columns: prCols, rows: prRows } = projectsTableData;
  // const [agreement, setAgremment] = useState(true);

  // const handleSetAgremment = () => setAgremment(!agreement);

  return (
    <DashboardLayout>
      <DashboardNavbar />            
     
      <SuiButton
        variant="gradient"
        buttonColor="info"
        component={Link}
        to="/approved">
        <Icon className="cursor-pointer" fontSize="small">
        reply
        </Icon>    
        &nbsp; Kembali
      </SuiButton>      

      <SuiBox py={3}>        
      <SuiBox mb={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <PenerimaManfaatDefinitif />
              </Grid>              
            </Grid>
        </SuiBox>
        <SuiBox mb={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <SuamiIstriDefinitif />
              </Grid>              
            </Grid>
        </SuiBox>
        <SuiBox mb={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <AnakDefinitif />
              </Grid>              
            </Grid>
        </SuiBox>
        <SuiBox mb={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <KorespondensiDefinitif />
              </Grid>              
            </Grid>
        </SuiBox>
        <SuiBox mb={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <RekeningDefinitif />
              </Grid>              
            </Grid>
        </SuiBox>

        <SuiButton
          variant="gradient"
          buttonColor="info"
          component={Link}
          to="/approved">
          <Icon className="cursor-pointer" fontSize="small">
          reply
          </Icon>    
          &nbsp; Kembali
        </SuiButton>        
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default ApprovedDetail;
