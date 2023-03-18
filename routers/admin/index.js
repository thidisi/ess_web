import helper from '~/helpers/common';

const dashboard = () =>
  helper.interopDefault(import('~/pages/admin/dashboard'));
const revenueBalance = () =>
  helper.interopDefault(import('~/pages/admin/simulations/revenue_balance'));
const projectedPower = () =>
  helper.interopDefault(import('~/pages/admin/simulations/projected_power'));
const solarRadiation = () =>
  helper.interopDefault(import('~/pages/admin/simulations/solar_radiation'));
const generationData = () =>
  helper.interopDefault(
    import('~/pages/admin/generation_data/power_generation_data')
  );
const showPowerGeneration = () =>
  helper.interopDefault(
    import('~/pages/admin/generation_data/show_power_generation')
  );
const costListGeneration = () =>
  helper.interopDefault(
    import('~/pages/admin/generation_data/cost_list_generation')
  );
const powerSemiBalancedGeneration = () =>
  helper.interopDefault(
    import('~/pages/admin/generation_data/power_semi_balanced_generation')
  );

export const adminRoutes = [
  {
    name: 'dashboard',
    path: '/dashboard',
    component: dashboard
  },
  {
    name: 'simulation.revenue_balance',
    path: '/simulations/revenue_balance',
    component: revenueBalance
  },
  {
    name: 'simulation.projected_power',
    path: '/simulations/projected_power',
    component: projectedPower
  },
  {
    name: 'simulation.solar_radiation',
    path: '/simulations/solar_radiation',
    component: solarRadiation
  },
  {
    name: 'generation_data.power_generation_data',
    path: '/generation_data/power_generation_data',
    component: generationData
  },
  {
    name: 'generation_data.show_power_generation',
    path: '/generation_data/show_power_generation',
    component: showPowerGeneration
  },
  {
    name: 'generation_data.cost_list_generation',
    path: '/generation_data/cost_list_generation',
    component: costListGeneration
  },
  {
    name: 'generation_data.power_semi_balanced_generation',
    path: '/generation_data/power_semi_balanced_generation',
    component: powerSemiBalancedGeneration
  }
];
