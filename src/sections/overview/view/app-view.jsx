import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';
import AppConversionRates from '../app-conversion-rates';

// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 👋
      </Typography>

      <Grid container spacing={5}>
        <Grid xs={11} sm={5} md={2.35}>
          <AppWidgetSummary
            title="Normal"
            total={4230}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={11} sm={5} md={2.35}>
          <AppWidgetSummary
            title="Mild"
            total={1456}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={11} sm={5} md={2.35}>
          <AppWidgetSummary
            title="Moderate"
            total={996}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={11} sm={5} md={2.35}>
          <AppWidgetSummary
            title="Severe"
            total={1253}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={11} sm={5} md={2.35}>
          <AppWidgetSummary
            title="Extreme"
            total={356}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Depression trends"
            subheader="(+33%) than last year"
            chart={{
              labels: [
                '01/01/2023',
                '02/01/2023',
                '03/01/2023',
                '04/01/2023',
                '05/01/2023',
                '06/01/2023',
                '07/01/2023',
                '08/01/2023',
                '09/01/2023',
                '10/01/2023',
                '11/01/2023',
              ],
              series: [
                {
                  name: 'Mild',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Moderate',
                  type: 'area',
                  fill: 'gradient',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
                {
                  name: 'Severe',
                  type: 'area',
                  fill: 'gradient',
                  data: [32, 31, 23, 24, 34, 52, 23, 42, 24, 43, 52],
                },
                {
                  name: 'Extreme severe',
                  type: 'area',
                  fill: 'gradient',
                  data: [12, 14, 8, 12, 14, 13, 7, 3, 5, 6, 10],
                },
                {
                  name: 'Normal',
                  type: 'area',
                  fill: 'gradient',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Depression catagoies"
            chart={{
              series: [
                { label: 'Mild', value: 1456 },
                { label: 'Moderate', value: 996 },
                { label: 'Severe', value: 1253 },
                { label: 'Extreme Severe', value: 356 },
                { label: 'Normal', value: 4230 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={15}>
          <AppConversionRates
            title="Age group"
            subheader="(+43%) than last year"
            chart={{
              series: [
                { label: '>10', value: 0 },
                { label: '10-15', value: 91 },
                { label: '16-20', value: 2341 },
                { label: '21-25', value: 1324 },
                { label: '26-30', value: 1537 },
                { label: '30-35', value: 1341 },
                { label: '35-40', value: 983 },
                { label: '41-45', value: 412 },
                { label: '46-50', value: 213 },
                { label: '51-55', value: 73 },
                { label: '56-60', value: 23 },
                { label: '<60', value: 7 },
              ],
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
