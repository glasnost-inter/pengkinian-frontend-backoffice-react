/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
// import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SuiAvatar from "components/SuiAvatar";
// import SuiBadge from "components/SuiBadge";

// Images
// import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";

/*
function Author({ image, name, email }) {
  return (
    <SuiBox display="flex" alignItems="center" px={1} py={0.5}>
      <SuiBox mr={2}>
        <SuiAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SuiBox>
      <SuiBox display="flex" flexDirection="column">
        <SuiTypography variant="button" fontWeight="medium">
          {name}
        </SuiTypography>
        <SuiTypography variant="caption" textColor="secondary">
          {email}
        </SuiTypography>
      </SuiBox>
    </SuiBox>
  );
}


function Function({ job, org }) {
  return (
    <SuiBox display="flex" flexDirection="column">
      <SuiTypography variant="caption" fontWeight="medium" textColor="text">
        {job}
      </SuiTypography>
      <SuiTypography variant="caption" textColor="secondary">
        {org}
      </SuiTypography>
    </SuiBox>
  );
}
*/

export default {
  columns: [
    { name: "no", align: "center" },
    { name: "userid", align: "left" },
    { name: "nopolis", align: "center" },
    { name: "pemegangpolis", align: "left" },
    { name: "jmlpengkinian", align: "right" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      no: (
        <SuiTypography variant="caption" textColor="secondary" fontWeight="medium">
          1
        </SuiTypography>
      ),
      userid: (
        <SuiTypography variant="caption" textColor="secondary" fontWeight="medium">
          3034-3049906
        </SuiTypography>
      ),
      nopolis: (
        <SuiTypography variant="caption" textColor="secondary" fontWeight="medium">
          0000003034
        </SuiTypography>
      ),
      pemegangpolis: (
        <SuiTypography variant="caption" textColor="secondary" fontWeight="medium">
          PT SURVEYOR INDONESIA
        </SuiTypography>
      ),
      jmlpengkinian: (
        <SuiTypography variant="caption" textColor="secondary" fontWeight="medium">
          5
        </SuiTypography>
      ),
      action: (
        <SuiTypography
          component="a"
          href="/waiting-approve-detail"
          variant="caption"
          textColor="secondary"
          fontWeight="medium"
        >
          Edit
        </SuiTypography>
      ),
    },
    {
      no: (
        <SuiTypography variant="caption" textColor="secondary" fontWeight="medium">
          2
        </SuiTypography>
      ),
      userid: (
        <SuiTypography variant="caption" textColor="secondary" fontWeight="medium">
          129-918210
        </SuiTypography>
      ),
      nopolis: (
        <SuiTypography variant="caption" textColor="secondary" fontWeight="medium">
          0000000129
        </SuiTypography>
      ),
      pemegangpolis: (
        <SuiTypography variant="caption" textColor="secondary" fontWeight="medium">
          PT. KERETA API INDONESIA
        </SuiTypography>
      ),
      jmlpengkinian: (
        <SuiTypography variant="caption" textColor="secondary" fontWeight="medium">
          10
        </SuiTypography>
      ),
      action: (
        <SuiTypography
          component="a"
          href="/waiting-approve-detail"
          variant="caption"
          textColor="secondary"
          fontWeight="medium"
        >
          Edit
        </SuiTypography>
      ),
    },
  ],
};
